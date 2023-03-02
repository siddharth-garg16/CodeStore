import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { BooksService } from '../books.service';
import { booksFetchAPISuccess, invokeBooksApi } from './books.action';

@Injectable()
export class BookEffects {
    constructor(private actions$: Actions, private bookService: BooksService) { }

    loadAllBooks$ = createEffect(() => 
        this.actions$.pipe(
            ofType(invokeBooksApi),
            switchMap(()=>{
                return this.bookService.get().pipe(map((data)=> booksFetchAPISuccess({allBooks:data})))
            })
        )
    )
}
