import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { StoreModule } from '@ngrx/store';
import { membersReducer } from './state/members.reducer';
import { MembersEffect } from './state/members.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MembersRoutingModule,
    StoreModule.forFeature('members', membersReducer),
    EffectsModule.forFeature([MembersEffect]),
  ]
})
export class MembersModule { }
