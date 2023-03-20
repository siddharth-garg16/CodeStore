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
export class ConnectorComponent implements OnInit{

  constructor(private dataService: DataService, private _formBuilder: FormBuilder) { }

  importedData: any[];
  processedData: Tenant[] = [];
  selectedValue: string;

  tenantForm = this._formBuilder.group({
    connectorName: ['', Validators.required],
    firstTenant: ['', Validators.required],
    secondTenant: ['', Validators.required],
    firstTenantInp: '',
    secondTenantInp: ''
  })

  tenantGroupOptionsA: Observable<Tenant[]>
  tenantGroupOptionsB: Observable<Tenant[]>

  ngOnInit() {
    this.importedData = this.dataService.tenantData;

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

  onClickSearch():void {
    console.log(this.tenantForm.get('connectorName').value)
    console.log(this.tenantForm.get('firstTenant').value)
    console.log(this.tenantForm.get('secondTenant').value)
    if (this.tenantForm.get('connectorName').value && this.tenantForm.get('firstTenant').value && this.tenantForm.get('secondName').value) {
      localStorage.setItem(this.tenantForm.get('connectorName').value, `{source:${this.tenantForm.get('firstTenant').value}, destination:${this.tenantForm.get('secondTenant').value}}`)
      this.tenantForm.reset();
    }
  }

  OnSecondInputChange():void {
    this.tenantGroupOptionsB = this.tenantForm.get('secondTenantInp')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('secondTenantInp').value || '')),
    );
  }

  OnFirstInputChange():void {
    this.tenantGroupOptionsA = this.tenantForm.get('firstTenantInp')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('firstTenantInp').value || '')),
    );
  }
}
