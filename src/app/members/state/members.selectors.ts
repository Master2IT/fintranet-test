import { createFeatureSelector } from "@ngrx/store";
import { Member } from "../memeber.interface";

export interface State {
    data: Member[],
    selected: Member[]
}

export const selectMembers = createFeatureSelector<State>('members')