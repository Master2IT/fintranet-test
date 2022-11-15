import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateStep } from 'src/app/store/app.actions';
import { selectState } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-form-theme',
  templateUrl: './form-theme.component.html',
  styleUrls: ['./form-theme.component.scss']
})
export class FormThemeComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input()
  get goNextPage(): boolean {
    return this._goNextPage;
  }
  set goNextPage(value: boolean) {
    this._goNextPage = value;
    if (value) this.nextPage()
  }

  @Input() showNext: boolean = true;
  @Output() onNextPage = new EventEmitter<any>();

  isDisableButton: boolean = false;
  private _goNextPage = false;
  showBackButton: boolean = true;

  step$ = this.store.select(selectState);

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    const currentRoute = this.router.url.replace(/[^\w ]/g, '');

    this.step$.subscribe(({ step }) => {
      if (currentRoute == 'upload') this.showBackButton = false;
      if (currentRoute != step) this.router.navigate([step]);
    })
  }

  nextPage() {
    if (this.goNextPage) {
      this.step$.subscribe(({ step }) => {
        this.router.navigate([step]);
      })
    } else {
      this.onNextPage.emit()
    }
  }
  prevPage() {
    const steps = ['upload', 'form', 'members', 'summary']
    const currentRoute = this.router.url.replace(/[^\w ]/g, '');

    var findIndex = steps.findIndex(o => o == currentRoute)
    const _step = steps[findIndex - 1];
    this.store.dispatch(updateStep({ step: _step }))
    // this.router.navigate([_step]);
  }

}
