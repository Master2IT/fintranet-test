import { createAction, props } from "@ngrx/store";

export const addImage = createAction(
    '[Upload] Add Image',
    props<{ image: any }>()
)
