import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  questionData = [
    {
        "id":1,
        "title":"MAKE A MOBILE APP",
        "parentID":null,
        "options":[],
        "image":"../../assets/mobile-app.svg"
    },
    {
        "id":2,
        "title":"MAKE A WEB APP",
        "parentID":null,
        "options":[],
        "image":"../../assets/web-app.svg"
    },
    {
        "id":3,
        "title":"MAKE DESIGNS",
        "parentID":null,
        "options":[],
        "image":"../../assets/designing.svg"
    },
    {
        "id":4,
        "title":"What type of app are you building?",
        "parentID":1,
        "options":[
            {
                "id":1,
                "title":"Android",
                "cost":1000
            },
            {
                "id":2,
                "title":"iOS",
                "cost":1000
            },
            {
                "id":3,
                "title":"Cross Platform",
                "cost":2000
            }
        ]
    },
    {
        "id":5,
        "title":"Which frontend technology do you prefer for the app?",
        "parentID":1,
        "options":[
            {
                "id":1,
                "title":"Flutter",
                "cost":1000
            },
            {
                "id":2,
                "title":"React Native",
                "cost":1200
            },
            {
                "id":3,
                "title":"Ionic",
                "cost":900
            }
        ]
    },
    {
        "id":6,
        "title":"Which UI do you prefer for your app?",
        "parentID":1,
        "options":[
            {
                "id":1,
                "title":"Default UI",
                "cost":300
            },
            {
                "id":2,
                "title":"Customised UI",
                "cost":700
            }
        ]
    },
    {
        "id":7,
        "title":"Which frontend technology do you prefer for the app?",
        "parentID":2,
        "options":[
            {
                "id":1,
                "title":"ReactJS",
                "cost":1200
            },
            {
                "id":2,
                "title":"Angular",
                "cost":1100
            },
            {
                "id":3,
                "title":"VueJS",
                "cost":1300
            }
        ]
    },
    {
        "id":8,
        "title":"Which UI do you prefer for your app?",
        "parentID":2,
        "options":[
            {
                "id":1,
                "title":"Default UI",
                "cost":300
            },
            {
                "id":2,
                "title":"Customised UI",
                "cost":700
            }
        ]
    },
    {
        "id":9,
        "title":"What color profile do you want?",
        "parentID":3,
        "options":[
            {
                "id":1,
                "title":"Black & White",
                "cost":500
            },
            {
                "id":2,
                "title":"Color Filled",
                "cost":800
            }
        ]
    },
    {
        "id":10,
        "title":"Do you want animated designs?",
        "parentID":3,
        "options":[
            {
                "id":1,
                "title":"Yes",
                "cost":1000
            },
            {
                "id":2,
                "title":"No",
                "cost":300
            }
        ]
    }
]
}
