import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { addForm } from './state/form.actions';
import { selectForm } from './state/form.selectors';
import { Form } from './form.interface';
import { updateStep } from '../store/app.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  statuses: Array<string> = []
  fetchData$ = this.store.select(selectForm)
  goNextPage: boolean = false;

  public reactiveForm!: FormGroup;

  public amount!: FormControl;
  public date!: FormControl;
  public status!: FormControl;
  public fund!: FormControl;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.statuses = ['success', 'pending', 'error', 'failed'];

    let stateForm = {
      amount: 0,
      date: new Date(),
      status: "success",
      fund: ""
    }

    this.fetchData$.subscribe(({ amount, date, fund, status }: Form) => {
      stateForm.amount = amount;
      stateForm.date = date;
      stateForm.status = status;
      stateForm.fund = fund;
    })


    this.amount = new FormControl(stateForm.amount, [Validators.required]);
    this.date = new FormControl(stateForm.date, [Validators.required]);
    this.status = new FormControl(stateForm.status, [Validators.required]);
    this.fund = new FormControl(stateForm.fund, [Validators.required]);

    this.reactiveForm = this.fb.group({
      amount: this.amount,
      date: this.date,
      status: this.status,
      fund: this.fund
    });

  }

  onNextPage() {
    if (this.amount.value && this.date.value && this.fund.value && !this.goNextPage) {
      const form: Form = {
        amount: this.amount.value,
        date: this.date.value,
        status: this.status.value,
        fund: this.fund.value
      }
      this.store.dispatch(addForm({ form }))
      this.store.dispatch(updateStep({ step: 'members' }))
      this.goNextPage = true;
    }
  }

}
