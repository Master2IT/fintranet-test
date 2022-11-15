import { createReducer, on } from "@ngrx/store";
import { Member } from "../memeber.interface";
import { loadMembersSuccess, updateSelectedMembers } from "./members.actions";

export interface State {
    data: Member[],
    selected: any
}

export const initialState: State = {
    data: [],
    selected: {}
}

export const membersReducer = createReducer(
    initialState,
    on(loadMembersSuccess, (state, { members }) => ({ ...state, data: members })),
    on(updateSelectedMembers, (state, { selected }) => ({ ...state, selected })),
)