import { createAction, props } from "@ngrx/store";

export const updateStep = createAction('[App] Update Step', props<{ step: string }>())