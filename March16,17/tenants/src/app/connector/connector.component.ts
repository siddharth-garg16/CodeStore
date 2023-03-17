import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder } from '@angular/forms';
import { Tenant } from '../Models/tenant.model';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export const _filter = (opt: {workflowName?:string, workflowID?:string}[], value: string): {workflowName?:string, workflowID?:string}[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.workflowName.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss'],
  providers: [DataService]
})
export class ConnectorComponent implements OnInit {
  constructor(private dataService: DataService, private _formBuilder: FormBuilder) { }

  importedData: any[];
  processedData: Tenant[] = [];
  selectedValue:string;

  tenantForm = this._formBuilder.group({
    tenantGroup1: '',
    tenantGroup2: '',
    tenantGroup3: ''
  })

  tenantGroupOptions: Observable<Tenant[]>

  ngOnInit() {
    this.importedData = this.dataService.tenantData;

    for(let tenant of this.importedData){
      if(tenant.crossTenantWorkflowSchemas.length>0){
        let currentTenant:Tenant = {
          tenantName: tenant.tenantName,
          workflow: []
        }
        for(let options of tenant.crossTenantWorkflowSchemas){
          currentTenant.workflow.push({
            workflowName: options.name,
            workflowID: options.workflowSchemaId
          })
        }
        this.processedData.push(currentTenant)
      }
    }

    this.tenantGroupOptions = this.tenantForm.get('tenantGroup1')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );

    this.tenantGroupOptions = this.tenantForm.get('tenantGroup2')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );

    this.tenantGroupOptions = this.tenantForm.get('tenantGroup3')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  show() {
    console.log(this.importedData)
    console.log(this.processedData)
  }

  showSelections() {
    console.log(this.tenantForm.get('tenantGroup1').value)
    console.log(this.tenantForm.get('tenantGroup2').value)
    console.log(this.tenantForm.get('tenantGroup3').value)
  }

  private _filterGroup(value: string): Tenant[] {
    if (value) {
      return this.processedData
        .map(tenant => ({tenantName: tenant.tenantName, workflow: _filter(tenant.workflow, value)}))
        .filter(tenant => tenant.workflow.length > 0);
    }
    return this.processedData;
  }
}
