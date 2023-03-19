import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Tenant } from '../Models/tenant.model';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export const _filter = (opt: {workflowName?:string, workflowID?:string}[], value: string): {workflowName?:string, workflowID?:string}[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.workflowName.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-dummy-connector',
  templateUrl: './dummy-connector.component.html',
  styleUrls: ['./dummy-connector.component.scss'],
  providers: [DataService]
})
export class DummyConnectorComponent {

  constructor(private dataService: DataService, private _formBuilder: FormBuilder) { }

  importedData: any[];
  processedData: Tenant[] = [];
  selectedValue:string;

  // firstTenant = new FormControl('');
  // secondTenant = new FormControl('');
  // firstTenantInp = new FormControl('');
  // secondTenantInp = new FormControl('');

  //for reference variable
  @ViewChild('firstTenantSearch') firstTenantInput : ElementRef;
  @ViewChild('secondTenantSearch') secondTenantInput : ElementRef;
  

  tenantForm = this._formBuilder.group({
    // tenantGroup1: '',
    // tenantGroup2: '',
    // tenantGroup3: ''
    firstTenant : '',
  secondTenant : '',
  firstTenantInp : '',
  secondTenantInp : '',
  })

  // tenantGroupOptions: Observable<Tenant[]>
  tenantGroupOptionsA: Observable<Tenant[]>
  tenantGroupOptionsB: Observable<Tenant[]>

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

    // this.tenantGroupOptionsA = this.firstTenant!.valueChanges.pipe(startWith(''), map(value => this._filterGroup('')),);

    // this.tenantGroupOptionsB = this.secondTenant!.valueChanges.pipe(startWith(''), map(value=> this._filterGroup('')),)

    
    this.tenantGroupOptionsA = this.tenantForm.get('firstTenant')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup('')),
    );

    this.tenantGroupOptionsB = this.tenantForm.get('secondTenant')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup('')),
    );

    // this.tenantGroupOptions = this.tenantForm.get('tenantGroup3')!.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterGroup(value || '')),
    // );
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

  onClickSearch() {
    console.log(this.tenantForm.get('firstTenant').value)
    console.log(this.tenantForm.get('secondTenant').value)
    alert ("Tenant 1  - " + this.tenantForm.get('firstTenant').value + " and Tenant 2 - "+ this.tenantForm.get('secondTenant').value);
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
