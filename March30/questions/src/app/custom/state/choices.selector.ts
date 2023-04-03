import { createFeatureSelector } from "@ngrx/store";
import { Choice } from "../custom/Models/choices.model";

export const selectChoices = createFeatureSelector<Choice[]>("myChoices")