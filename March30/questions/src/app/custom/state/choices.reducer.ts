import { createReducer, on } from "@ngrx/store";
import { Choice } from "../custom/Models/choices.model";
import { ADD_CHOICES } from "./choices.action";

export const initialState: ReadonlyArray<Choice> = [];

export const choiceReducer = createReducer(
    initialState,
    on(ADD_CHOICES, (state, {allChoices})=>{
        return allChoices;
    })
)