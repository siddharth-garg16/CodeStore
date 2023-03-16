import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss'],
  providers:[DataService]
})
export class ConnectorComponent implements OnInit{
  importedData: any[];
  processedData: any[] = [];
  firstOptionVal:string;
  secondOptionVal:string;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.importedData = this.dataService.tenantData;

    for(let tenant of this.importedData){
      let tempName = [];
      tempName.push(tenant.tenantName)
      this.processedData.push(tempName)
      let tempOptions = [];
      for(let options of tenant.crossTenantWorkflowSchemas){
        debugger
        tempOptions.push([options.workflowSchemaId, options.name])
      }
      tempName.push(tempOptions)
    }
  }

  show(){
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
