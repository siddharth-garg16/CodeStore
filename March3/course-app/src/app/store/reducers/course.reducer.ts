import { CourseItem } from "../models/courseItem.model";
import { CourseAction, CourseActionType } from "../actions/course.action";

//creating initial state
const initialState:CourseItem[] = [
    {
        id:'1',
        department:'Computer Engineering',
        name:'C++ Programming'

    },
];

export function courseReducer(
    state:CourseItem[] = initialState,
    action: CourseAction
){
    switch(action.type){
        case CourseActionType.ADD_ITEM:
            console.log(action.payload, state)
            
            return [...state, action.payload];
        default:
            
            return state;
    }
}
