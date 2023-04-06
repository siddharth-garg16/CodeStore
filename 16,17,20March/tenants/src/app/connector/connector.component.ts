import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Tenant } from '../Models/tenant.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export const _filter = (opt: { workflowName?: string, workflowID?: string }[], value: string): { workflowName?: string, workflowID?: string }[] => {
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
  selectedValue: string;

  tenantForm = this._formBuilder.group({
    connectorName: ['', Validators.required],
    firstTenant: ['', Validators.required],
    secondTenant: ['', Validators.required],
    firstTenantSearchInput: '',
    secondTenantSearchInput: ''
  })

  tenantGroupOptionsA: Observable<Tenant[]>
  tenantGroupOptionsB: Observable<Tenant[]>

  ngOnInit() {
    this.importedData = this.dataService.tenantData;

    if(!localStorage.getItem('connections')){
      localStorage.setItem('connections', '[]')
    }

    for (let tenant of this.importedData) {
      if (tenant.crossTenantWorkflowSchemas.length > 0) {
        let currentTenant: Tenant = {
          tenantName: tenant.tenantName,
          workflow: []
        }
        for (let options of tenant.crossTenantWorkflowSchemas) {
          currentTenant.workflow.push({
            workflowName: options.name,
            workflowID: options.workflowSchemaId,
            isDisabled: false
          })
        }
        this.processedData.push(currentTenant)
      }
    }

    this.tenantGroupOptionsA = this.tenantForm.get('firstTenant')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup('')),
    );

    this.tenantGroupOptionsB = this.tenantForm.get('secondTenant')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup('')),
    );
  }
 
  showData() {
    console.log(this.importedData)
    console.log(this.processedData)
  }

  private _filterGroup(value: string): Tenant[] {
    if (value) {
      return this.processedData
        .map(tenant => ({ tenantName: tenant.tenantName, workflow: _filter(tenant.workflow, value) }))
        .filter(tenant => tenant.workflow.length > 0);
    }
    return this.processedData;
  }

  onClickSearch(): void {
    if (this.tenantForm.get('connectorName').value !== "" && this.tenantForm.get('firstTenant').value !== "" && this.tenantForm.get('secondTenant').value !== "") {
      let locale = JSON.parse(localStorage.getItem('connections'))
      let currentEntry = {
        source: this.tenantForm.get('firstTenant').value,
        destination: this.tenantForm.get('secondTenant').value
      }
      locale.push(currentEntry);
      localStorage.setItem('connections', JSON.stringify(locale))
      this.tenantForm.reset();
      this.resetA();
      this.resetB();
    }
  }

  OnFirstInputChange(): void {
    this.tenantGroupOptionsA = this.tenantForm.get('firstTenantSearchInput')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('firstTenantSearchInput').value || '')),
    );
  }

  OnSecondInputChange(): void {
    this.tenantGroupOptionsB = this.tenantForm.get('secondTenantSearchInput')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('secondTenantSearchInput').value || '')),
    );
  }

  getFirstTenantSelection() {
    this.resetB();
    this.tenantGroupOptionsB.forEach(tenantVal => {
      tenantIteration:
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          if (workflow.workflowID === this.tenantForm.get('firstTenant').value) {
            workflow.isDisabled = true;
          }
          if(localStorage.getItem('connections')){
            let locale = JSON.parse(localStorage.getItem('connections'))
            for(let connection of locale){
              if(connection.source === this.tenantForm.get('firstTenant').value && connection.destination === workflow.workflowID){
                workflow.isDisabled = true;
              }
            }
          }
        }
      }
    })
  }

  getSecondTenantSelection() {
    this.resetA();
    this.tenantGroupOptionsA.forEach(tenantVal => {
      tenantIteration:
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          if (workflow.workflowID === this.tenantForm.get('secondTenant').value) {
            workflow.isDisabled = true;
          }
          if(localStorage.getItem('connections')){
            let locale = JSON.parse(localStorage.getItem('connections'))
            for(let connection of locale){
              if(connection.destination === this.tenantForm.get('secondTenant').value && connection.source === workflow.workflowID){
                workflow.isDisabled = true;
              }
            }
          }
        }
      }
    })
  }

  resetA(){
    this.tenantGroupOptionsA.forEach(tenantVal => {
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          workflow.isDisabled = false;
        }
      }
    })
  }

  resetB(){
    this.tenantGroupOptionsB.forEach(tenantVal => {
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          workflow.isDisabled = false;
        }
      }
    })
  }

  reset() {
    this.tenantForm.reset();
    localStorage.clear();
  }
}


