import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { StudentAddEditComponent } from "../student-add-edit/student-add-edit.component";
import {Injectable} from "@angular/core"

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<StudentAddEditComponent>{
    
    canDeactivate(component: StudentAddEditComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot){
            return component.canExit();
            // return true;
    }
}