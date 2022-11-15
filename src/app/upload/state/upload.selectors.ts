import { createFeatureSelector } from "@ngrx/store";

export const selectImage = createFeatureSelector<string>('upload')