import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface AppState {
    step: string
}

export const selectState = createFeatureSelector<AppState>('appState') 