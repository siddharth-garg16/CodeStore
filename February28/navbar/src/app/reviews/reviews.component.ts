import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  customerReviews:{customerName:string, dateOfReview:string, reviewHeading:string, reviewContent:string}[] = [
    {
      customerName:"Unknown User",
      dateOfReview: "January 21, 2023",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    },
    {
      customerName:"Random User",
      dateOfReview: "December 29, 2022",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    },
    {
      customerName:"Hidden User",
      dateOfReview: "December 11, 2022",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    },
    {
      customerName:"Unknown User",
      dateOfReview: "November 2, 2022",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    },
    {
      customerName:"Random User",
      dateOfReview: "October 15, 2022",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    },
    {
      customerName:"Hidden User",
      dateOfReview: "August 16, 2022",
      reviewHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      reviewContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quasi earum vitae impedit, nesciunt harum optio voluptas possimus. Ratione tempora veniam consequatur dicta laborum. Fuga expedita magni natus excepturi."
    }
  ];

}
