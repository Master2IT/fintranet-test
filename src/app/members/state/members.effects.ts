import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import { MembersService } from "../members.service";
import { Member } from "../memeber.interface";
import { loadMembers, loadMembersSuccess } from "./members.actions";

@Injectable()
export class MembersEffect {
    constructor(
        private actions$: Actions,
        private membersService: MembersService
    ) { }


    loadMembers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMembers),
            switchMap(() => {
                return this.membersService
                    .findAll()
                    .pipe(map((value: any) => loadMembersSuccess({
                        members: value.map(({ id, name, username, email, phone }: Member) => ({ id, name, username, email, phone }))
                    })))
            })
        )
    );
}   