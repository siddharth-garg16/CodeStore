import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  tenantData = [
    {
        "tenantId": "11E9629D0AB365FDBF7C02004C4F4F50",
        "tenantName": "GDC",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "EBF0D29787302D43B3536E5998CFB3EB",
                "name": "GDC",
                "caseSchemaId": "09848A35D7181C4B8F0B222B7DE3BD98"
            }
        ]
    },
    {
        "tenantId": "11E9D08FB460EF3EA2F602004C4F4F50",
        "tenantName": "Cargoclix Test",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "68266DDDF08BCD43BE3C99A07DE1222D",
                "name": "GDC",
                "caseSchemaId": "49C0BDE7F408FB4E8596F6308218E75B"
            },
            {
                "workflowSchemaId": "F3A8B9531DC9214FBFABCE0378C6663A",
                "name": "test",
                "caseSchemaId": "D896BFB1555B024085087C4EB02D8F9B"
            },
            {
                "workflowSchemaId": "ADC1D6F7C5392B4AA7718E2FEF388D4E",
                "name": "workflow",
                "caseSchemaId": "2C47806795976748BF0D7F882135BA41"
            },
            {
                "workflowSchemaId": "8859A5D413400646A9416C8F1180CABD",
                "name": "workflow",
                "caseSchemaId": "64ECB9AEB61EA949BB722A530A10B67B"
            },
            {
                "workflowSchemaId": "4F44CD3375C4544B8C1EED0A0572FBEF",
                "name": "workflow",
                "caseSchemaId": "6C6E392D697FDD4B9ED479A40C2820A5"
            },
            {
                "workflowSchemaId": "C290A79E5991C5498E38B5E860C4E1A1",
                "name": "workflow",
                "caseSchemaId": "5F34ED21DEA63A4EA67C2730EB3607BF"
            },
            {
                "workflowSchemaId": "349ABDF2BD0EF44D97E3FBCEA30804F5",
                "name": "workflow",
                "caseSchemaId": "99EE4BBB3FFC414D88414A87FE4B66FF"
            },
            {
                "workflowSchemaId": "EA40C51AA76BA543B8A9CA8B407CDA15",
                "name": "workflow",
                "caseSchemaId": "0C283ACE12DC0345AC288D4760480F7F"
            },
            {
                "workflowSchemaId": "41C737B779CCA84D97E6F079ED8ECE74",
                "name": "workflow",
                "caseSchemaId": "D128F33DCC6DBE4A8CF56964C86929B0"
            },
            {
                "workflowSchemaId": "7A6FAE83DE134C428825AE8BE6AACB57",
                "name": "workflow",
                "caseSchemaId": "95928DCA77B1194C9EBA3753C1437FB7"
            },
            {
                "workflowSchemaId": "83EE0B38596FEF459FFE797D4F6BC845",
                "name": "workflow",
                "caseSchemaId": "284C993A36D8DF43820B65711DECE7BB"
            },
            {
                "workflowSchemaId": "F6661BEFCE72264E90E070376FCEB9D0",
                "name": "workflow-1652440399730",
                "caseSchemaId": "81CBF38D051BBC42934B8AFBA2688C9C"
            },
            {
                "workflowSchemaId": "973170EDB837DB489E13F8623F8A23D7",
                "name": "workflow",
                "caseSchemaId": "EFB36A0732BF5C418EBCDC38D96CC567"
            },
            {
                "workflowSchemaId": "9F354C1ECE816948A908A24B0B141EC5",
                "name": "workflow",
                "caseSchemaId": "ACD6D050C929C3408AED35ED76AC4262"
            },
            {
                "workflowSchemaId": "C7229DE0D2A22E43AC7F832A4F1D69E9",
                "name": "workflow",
                "caseSchemaId": "2166F819E34D2D48A6E040DD35977C78"
            },
            {
                "workflowSchemaId": "54C25A9BFF92114E8642544F57ED4ADA",
                "name": "workflow",
                "caseSchemaId": "31EE341C4E550E429E036E7FF3EE8EC5"
            },
            {
                "workflowSchemaId": "DAD307AAEEFA5A4D89E1A9169751842F",
                "name": "workflow",
                "caseSchemaId": "B0F3CA17004C23489AF6ABFD5F6560FF"
            },
            {
                "workflowSchemaId": "C0A334476AF47445AD5A99D129ECB975",
                "name": "workflow",
                "caseSchemaId": "4FE9DA3012CCAB4EA6CE5564BD6EC32C"
            },
            {
                "workflowSchemaId": "B2AE2FFEBFE0164CA6B9B68F33A1335D",
                "name": "workflow",
                "caseSchemaId": "DE131C788179324DA577E25C3A48B7D0"
            },
            {
                "workflowSchemaId": "E3778DFA84FD164B813DC3E4D7FF38A2",
                "name": "workflow",
                "caseSchemaId": "F4E057A50E1E884EB0EA2DF3A02961CD"
            }
        ]
    },
    {
        "tenantId": "5D88FA6F3AAE714AB231FA78298ED15D",
        "tenantName": "Dr. Meier & Schmidt",
        "crossTenantWorkflowSchemas": []
    },
    {
        "tenantId": "60AA9E1CECAC544E8F56F42C33D42F47",
        "tenantName": "Thyssenkrupp",
        "crossTenantWorkflowSchemas": []
    },
    {
        "tenantId": "4E0701ED4850C641BB4F0AF8880551F2",
        "tenantName": "Porsche",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "71ACB134D7D0F44EB16EC39E26413C15",
                "name": "Container",
                "caseSchemaId": "4D14E04804BB2F43AF19835BC9EEB777"
            }
        ]
    },
    {
        "tenantId": "DD2C0CD247D06E4AAF30D3D117965CA2",
        "tenantName": "GDC - Copy",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "0A09822D9AF0414382DD63A326C4D4FF",
                "name": "GDC",
                "caseSchemaId": "0C75B3A0530F524990A5568C995C524B"
            }
        ]
    },
    {
        "tenantId": "7582C3425751B8459B39712F9A0D59FF",
        "tenantName": "Test tenant",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "E1FEFB31BF61224A989BD5C7D5459BB2",
                "name": "Yard",
                "caseSchemaId": "6FE1135B576FB343B8D4EC89A0D6512C"
            },
            {
                "workflowSchemaId": "928FA162A5037B43B69BAB76728592E9",
                "name": "wf-2",
                "caseSchemaId": "4E735055549A624CB1876459A335355F"
            }
        ]
    },
    {
        "tenantId": "1E08C4544B6557479D66F2A09B236F03",
        "tenantName": "test",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "FD04BD4A80B42D4183A8CF08E180D4F9",
                "name": "Workflow GDC",
                "caseSchemaId": "0F41B724775CBF4F8C5418B74A2FEB1E"
            },
            {
                "workflowSchemaId": "5BEA57D8E9E86940A0BE9BA2AF27FFB5",
                "name": "2811",
                "caseSchemaId": "687BC6C93FC5AA4EB637BE681BC272B6"
            },
            {
                "workflowSchemaId": "A5FC404BD9EED74AA49FAB4658E241FF",
                "name": "WFM-3108",
                "caseSchemaId": "6874A72A29C1E54AB3F40DC5867B85F2"
            },
            {
                "workflowSchemaId": "5F721FA097D91643B076883340DA7D54",
                "name": "WFM-2915",
                "caseSchemaId": "E069D1078F3F3240AA72A5D1D99A136D"
            },
            {
                "workflowSchemaId": "EF908F5C745C40429C3953326B4F537F",
                "name": "2956",
                "caseSchemaId": "E76A3D8DD23C5C47A781695A8A833659"
            },
            {
                "workflowSchemaId": "838FFFC43E70F649B90FD2FD354E8AD1",
                "name": "Employee",
                "caseSchemaId": "496813C69F25714281DD0B20D45D6348"
            },
            {
                "workflowSchemaId": "27B4A53067C3584880DB82415B8A4D45",
                "name": "Task",
                "caseSchemaId": "463476DE42BCCB4D85F71DB7114838EB"
            },
            {
                "workflowSchemaId": "DE3CBC770B45864CB9763E20A9AAD757",
                "name": "Blacklisted clients",
                "caseSchemaId": "FEDCB33352B44548911EBB26B89B0A41"
            },
            {
                "workflowSchemaId": "03741FCDC490524695125B52C2744EB4",
                "name": "Bookings",
                "caseSchemaId": "51EBE7F3111F2D4AB2361BF18439503C"
            }
        ]
    },
    {
        "tenantId": "3BF152E76014B74E99EC5570C8541EE7",
        "tenantName": "Becker Stahl",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "067FC37808E8CE48A41210144BE120D5",
                "name": "Wareneingang",
                "caseSchemaId": "80FB413554513A45BDC45FB8BC2E2542"
            }
        ]
    },
    {
        "tenantId": "6F588242218D3C45BBCDE2E7F4C697B2",
        "tenantName": "TenantQA",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "635635BAB016394CACB91A8F993C7944",
                "name": "myWorkflow",
                "caseSchemaId": "616AE14BDD8EFF4C9D30AB5F0C5432AC"
            },
            {
                "workflowSchemaId": "85A469DD82195348847BD2FFEE59F149",
                "name": "Workflow1",
                "caseSchemaId": "0CA3AE626214A84EA278E374DDFEB4D2"
            },
            {
                "workflowSchemaId": "763C8BDBF623124D8ED113FCE234ABAD",
                "name": "Workflow2",
                "caseSchemaId": "23EDA8855C0ABF46AB6B0FF54F0B8CBA"
            },
            {
                "workflowSchemaId": "9FE541DD765CA5498459B0809B34FCA8",
                "name": "Workflow3",
                "caseSchemaId": "236E6E016F920246A058D313F5012F9B"
            }
        ]
    },
    {
        "tenantId": "0038A8FF53D6E84687FC98E59672B67C",
        "tenantName": "Haribo",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "2D5E08C871FB4B48B7BB778A318A12C2",
                "name": "Load Details/Pallet Tracking",
                "caseSchemaId": "A7F81B3E5023474C83116D2287E92645"
            }
        ]
    },
    {
        "tenantId": "A6F0FF18D3C19C4BA4A413369E9F1305",
        "tenantName": "Michelin",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "ABDBD62EAF899644B47851D6D707C2F4",
                "name": "Aufträge",
                "caseSchemaId": "2523314C75228B41A3F57FDBA6CD18E9"
            },
            {
                "workflowSchemaId": "E38943BF5BFA174FAE13B99542483075",
                "name": "MU Warenausgang",
                "caseSchemaId": "E09C8C6815DB9945B7A53F84C28CE4B7"
            },
            {
                "workflowSchemaId": "DD68BA36B437CF41AE909AD3BF6CFF86",
                "name": "MU Wareneingang",
                "caseSchemaId": "344B2E2A05A1814BB3C3941F5653F14B"
            },
            {
                "workflowSchemaId": "B07CAE1C94B4B3459A8DFAB97D5183B9",
                "name": "EDC Wareneingang",
                "caseSchemaId": "ADB85979A0DB7D49A859F6A0CFF03BF9"
            },
            {
                "workflowSchemaId": "239EA35A41B26744A85BD5544C7E8B4C",
                "name": "EDC Warenausgang",
                "caseSchemaId": "1479BF774690744A8BF042A47D542DA7"
            }
        ]
    },
    {
        "tenantId": "D7E7AA3329BD7B4F99B6166D8FC16EA1",
        "tenantName": "TEDi",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "6B7FFB985F1DDB4182787B795340C412",
                "name": "Lieferungen",
                "caseSchemaId": "DA5922F769A4E440B7B77ED3D806CB4C"
            }
        ]
    },
    {
        "tenantId": "BF96C91FC6ED08418D5B6974DC03127A",
        "tenantName": "Parker",
        "crossTenantWorkflowSchemas": []
    },
    {
        "tenantId": "478D40B3F2E27A40BF27F372D1CCBA63",
        "tenantName": "TenantCloning",
        "crossTenantWorkflowSchemas": [
            {
                "workflowSchemaId": "E268CA05D349724CB7EF03BBA8E69A76",
                "name": "myWorkflow",
                "caseSchemaId": "FD06D7F172ECF045A8587FD7F909D6A6"
            },
            {
                "workflowSchemaId": "3B2670AEE8F74F418082B5C1EFB3408E",
                "name": "Workflow1",
                "caseSchemaId": "6D56887BEC474D4FA6CFEC74B195D48E"
            },
            {
                "workflowSchemaId": "4CA1903DC096E44A9606B853275228A0",
                "name": "Workflow2",
                "caseSchemaId": "D0D152FB3590DF47938E0CD0DE426B64"
            },
            {
                "workflowSchemaId": "98D4594CB362EF4E8162743602092385",
                "name": "Workflow3",
                "caseSchemaId": "F195E0FE76D0FB4390918676661CBEDA"
            }
        ]
    }
]
}
