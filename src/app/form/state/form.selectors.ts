import { createFeatureSelector } from "@ngrx/store";
import { Form } from "src/app/form/form.interface";

export const selectForm = createFeatureSelector<Form>('form')