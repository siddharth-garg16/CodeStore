import { createFeatureSelector } from "@ngrx/store";
import { Choice } from "../custom/Models/selection.model";

export const selectChoices = createFeatureSelector<Choice[]>("myChoices")