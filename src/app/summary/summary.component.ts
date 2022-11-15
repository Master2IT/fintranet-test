import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectForm } from '../form/state/form.selectors';
import { selectMembers } from '../members/state/members.selectors';
import { selectImage } from '../upload/state/upload.selectors';
import { DomSanitizer } from '@angular/platform-browser'; 

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  image$ = this.store.select(selectImage);
  form$ = this.store.select(selectForm);
  selectedMember$ = this.store.select(selectMembers)
  info: any = {
    image: '',
    form: {
      amount: 0,
      date: new Date(),
      status: 'success',
      fund: ''
    },
    selected: {}
  }

  constructor(private store: Store, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.image$.subscribe(state => {
      this.info.image = state;
    })
    this.form$.subscribe(state => {
      this.info.form = { ...state }
    })
    this.selectedMember$.subscribe(state => {
      this.info.selected = state.selected
    })
  }
}
