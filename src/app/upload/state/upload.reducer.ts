import { createReducer, on } from "@ngrx/store";
import { addImage } from "./upload.actions";

export const initialState: any = ""

export const uploadReducer = createReducer(
    initialState,
    on(addImage, (state, { image }) => image)
)