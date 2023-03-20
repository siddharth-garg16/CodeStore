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
    console.log(this.tenantForm.get('connectorName').value)
    console.log(this.tenantForm.get('firstTenant').value)
    console.log(this.tenantForm.get('secondTenant').value)
    if (this.tenantForm.get('connectorName').value !== "" && this.tenantForm.get('firstTenant').value !== "" && this.tenantForm.get('secondTenant').value !== "") {
      localStorage.setItem(this.tenantForm.get('firstTenant').value, this.tenantForm.get('secondTenant').value);
      this.tenantForm.reset();
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
    this.tenantGroupOptionsB.forEach(tenantVal => {
      tenantIteration:
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          if (workflow.workflowID === this.tenantForm.get('firstTenant').value) {
            workflow.isDisabled = true;
          }
          if (localStorage.getItem(this.tenantForm.get('firstTenant').value)) {
            if (workflow.workflowID === localStorage.getItem(this.tenantForm.get('firstTenant').value)) {
              workflow.isDisabled = true;
              break tenantIteration
            }
          }
        }
      }
    })
  }

  getSecondTenantSelection() {
    this.tenantGroupOptionsA.forEach(tenantVal => {
      tenantIteration:
      for (let tenant of tenantVal) {
        for (let workflow of tenant.workflow) {
          if (workflow.workflowID === this.tenantForm.get('secondTenant').value) {
            workflow.isDisabled = true;
          }
        }
      }
    })
  }

  reset() {
    this.tenantForm.reset();
    localStorage.clear();
  }
}


