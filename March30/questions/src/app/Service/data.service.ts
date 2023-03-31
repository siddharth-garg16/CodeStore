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
        "hasMultipleValues":false,
        "image":"../icons/mobile-app.svg"
    },
    {
        "id":2,
        "title":"MAKE A WEB APP",
        "parentID":null,
        "options":[],
        "hasMultipleValues":false,
        "image":"../icons/web-app.svg"
    },
    {
        "id":3,
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
                "title":"Android + iOS",
                "cost":2000
            }
        ],
        "hasMultipleValues":false
    },
    {
        "id":4,
        "title":"Which frontend technology do you prefer for the app?",
        "parentID":1,
        "options":[
            {
                "id":1,
                "title":"Flutter",
                "cost":800
            },
            {
                "id":2,
                "title":"React Native",
                "cost":800
            },
            {
                "id":3,
                "title":"Ionic",
                "cost":800
            }
        ],
        "hasMultipleValues":false
    },
    {
        "id":5,
        "title":"Which UI do you prefer for your app?",
        "parentID":1,
        "options":[
            {
                "id":1,
                "title":"Default UI",
                "cost":200
            },
            {
                "id":2,
                "title":"Customised UI",
                "cost":700
            }
        ],
        "hasMultipleValues":false
    },
    {
        "id":6,
        "title":"Which frontend technology do you prefer for the app?",
        "parentID":2,
        "options":[
            {
                "id":1,
                "title":"ReactJS",
                "cost":1000
            },
            {
                "id":2,
                "title":"Angular",
                "cost":1000
            },
            {
                "id":3,
                "title":"VueJS",
                "cost":1000
            }
        ],
        "hasMultipleValues":false
    },
    {
        "id":7,
        "title":"Which UI do you prefer for your app?",
        "parentID":2,
        "options":[
            {
                "id":1,
                "title":"Default UI",
                "cost":200
            },
            {
                "id":2,
                "title":"Customised UI",
                "cost":700
            }
        ],
        "hasMultipleValues":false
    }
]
}