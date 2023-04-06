import { Action } from "@ngrx/store";
import {CourseItem} from "../models/courseItem.model"

export enum CourseActionType {
    ADD_ITEM = "[COURSE] Add Course"
}

export class AddItemAction implements Action {
    readonly type:string = CourseActionType.ADD_ITEM;

    constructor(public payload:CourseItem){}
}

export type CourseAction = AddItemAction;