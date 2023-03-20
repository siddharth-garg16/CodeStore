import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
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
export class ConnectorComponent {

  constructor(private dataService: DataService, private _formBuilder: FormBuilder) { }

  importedData: any[];
  processedData: Tenant[] = [];
  selectedValue: string;

  @ViewChild('firstTenantSearch') firstTenantInput: ElementRef;
  @ViewChild('secondTenantSearch') secondTenantInput: ElementRef;


  tenantForm = this._formBuilder.group({
    firstTenant: '',
    secondTenant: '',
    firstTenantInp: '',
    secondTenantInp: '',
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
            workflowID: options.workflowSchemaId
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

  show() {
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

  onClickSearch() {
    console.log(this.tenantForm.get('firstTenant').value)
    console.log(this.tenantForm.get('secondTenant').value)
    alert("Tenant 1  - " + this.tenantForm.get('firstTenant').value + " and Tenant 2 - " + this.tenantForm.get('secondTenant').value);
    this.tenantForm.reset()
  }

  OnFirstTenantInputChange() {
    console.log(this.firstTenantInput)
  }

  OnSecondInputChange() {
    console.log(this.tenantForm.get('secondTenantInp').value);
    this.tenantGroupOptionsB = this.tenantForm.get('secondTenantInp')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('secondTenantInp').value || '')),
    );
  }

  OnFirstInputChange() {
    console.log(this.tenantForm.get('firstTenantInp').value)
    this.tenantGroupOptionsA = this.tenantForm.get('firstTenantInp')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(this.tenantForm.get('firstTenantInp').value || '')),
    );
  }
}
