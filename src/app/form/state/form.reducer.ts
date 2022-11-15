import { createReducer, on } from "@ngrx/store";
import { Form } from "src/app/form/form.interface";
import { addForm } from "./form.actions";

export const initialState: Form = {
    amount: 0,
    date: new Date(),
    status: "success",
    fund: ""
}

export const formReducer = createReducer(
    initialState,
    on(addForm, (state, { form }) => ({
        ...form
    })),
)