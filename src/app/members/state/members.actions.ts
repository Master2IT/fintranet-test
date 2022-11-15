import { createAction, props } from "@ngrx/store";
import { Member } from "../memeber.interface";


export const loadMembers = createAction('[Members] Load Members')
export const loadMembersSuccess = createAction(
    '[Members] Load Members Success',
    props<{ members: Member[] }>()
)
export const updateSelectedMembers = createAction(
    '[Members] Update Selected Member',
    props<{ selected: Member[] }>()
) 