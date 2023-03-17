import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
import {FormBuilder} from '@angular/forms';
import {Tenant} from '../Models/tenant.model';
import { Observable } from 'rxjs';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss'],
  providers:[DataService]
})
export class ConnectorComponent implements OnInit{
  constructor(private dataService: DataService, private _formBuilder: FormBuilder){}

  importedData: any[];
  processedData: Tenant[] = [];
  firstOptionVal:string;
  secondOptionVal:string;

  tenantForm = this._formBuilder.group({
    tenantGroup:''
  })


  tenantGroupOptions: Observable<Tenant[]>

  ngOnInit(){
    this.importedData = this.dataService.tenantData;

    // for(let tenant of this.importedData){
    //   if(tenant.crossTenantWorkflowSchemas.length>0){
    //     for(let options of tenant.crossTenantWorkflowSchemas){
    //       let currentTenant:Tenant = {
    //         tenantName : tenant.tenantName,
    //         workflowName: "",
    //         workflowID: ""
    //       };
    //       // debugger
    //       currentTenant.workflowName = options.name;
    //       currentTenant.workflowID = options.workflowSchemaId;
    //       this.processedData.push(currentTenant);
    //     }
    //   }
    // }
    for(let tenant of this.importedData){
      if(tenant.crossTenantWorkflowSchemas.length>0){
        let currentTenant:Tenant = {
          tenantName: tenant.tenantName,
          workflow: []
        }
        for(let options of tenant.crossTenantWorkflowSchemas){
          currentTenant.workflow.push({workflowID:options.workflowSchemaId, workflowName: options.name});
        }
        this.processedData.push(currentTenant);
      }
    }

  }

  show(){
    //testing
    console.log(this.importedData)
    console.log(this.processedData)
  }

  showSelections(){
    console.log(this.firstOptionVal, this.secondOptionVal)
  }


  private _filterGroup(value: string): Tenant[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}
