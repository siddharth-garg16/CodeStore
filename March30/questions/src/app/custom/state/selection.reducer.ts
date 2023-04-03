import { createReducer, on } from "@ngrx/store";
import { Selection } from "../custom/Models/selection.model";
import { ADD_CHOICES } from "./selection.action";

export const initialState: ReadonlyArray<Selection> = [];

export function choiceReducer(state = initialState, action: { type: any; }){
    switch(action.type){
        case "LOAD_SELECTIONS": {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}