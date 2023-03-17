import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
import {FormControl} from '@angular/forms';
import {Tenant} from '../Models/tenant.model';


@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss'],
  providers:[DataService]
})
export class ConnectorComponent implements OnInit{
  importedData: any[];
  processedData: Tenant[] = [];
  firstOptionVal:string;
  secondOptionVal:string;

  constructor(private dataService: DataService){}

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

  onKey(event){
    let searchValue = event.value
  }

  showSelections(){
    console.log(this.firstOptionVal, this.secondOptionVal)
  }

}
