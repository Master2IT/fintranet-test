import { createAction, props } from "@ngrx/store";
import { Form } from "src/app/form/form.interface";

export const addForm = createAction('[Form] Add Form', props<{ form: Form }>())