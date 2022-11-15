import { createReducer, on } from "@ngrx/store";
import { updateStep } from "./app.actions";
import { AppState } from "./app.selectors";

export const initialState: AppState = {
    step: "upload"
}

export const appReducer = createReducer(
    initialState,
    on(updateStep, (state, { step }) => ({ step }))
)