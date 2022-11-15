import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateStep } from '../store/app.actions';
import { Member } from './memeber.interface';
import { loadMembers, updateSelectedMembers } from './state/members.actions';
import { selectMembers } from './state/members.selectors';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  goNextPage: boolean = false;
  members$ = this.store.select(selectMembers);
  selectedMember: any = {}
  cols: any[] = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'username', header: 'Username' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' }
    ];
    this.store.dispatch(loadMembers())
  }

  onRowSelected() {
    this.store.dispatch(updateSelectedMembers({ selected: this.selectedMember }))
  }

  onRowUnselect() {
    this.store.dispatch(updateSelectedMembers({ selected: this.selectedMember }))
  }

  onNextPage() {
    if (Object.keys(this.selectedMember).length !== 0) {
      this.store.dispatch(updateStep({ step: 'summary' }))
      this.goNextPage = true;
    }
  }

}
