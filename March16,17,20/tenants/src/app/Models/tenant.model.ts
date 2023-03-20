export interface Tenant {
    tenantName:string,
    workflow: {workflowName?:string, workflowID?:string, isDisabled?:boolean}[]
}
