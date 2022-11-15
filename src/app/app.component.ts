import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { updateStep } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Upload Image',
        routerLink: 'upload',
      },
      {
        label: 'Form',
        routerLink: 'form'
      },
      {
        label: 'Members',
        routerLink: 'members'
      },
      {
        label: 'Summary',
        routerLink: 'summary'
      }
    ];
  }
}
