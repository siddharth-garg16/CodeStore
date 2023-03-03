import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, exhaustMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { BooksService } from '../books.service';
import { Book } from './book';
import { booksFetchAPISuccess, invokeBooksApi } from './books.action';
import { selectBooks } from './books.selector';

@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store
  ) { }

  // loadAllBooks$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(invokeBooksApi),
  //     withLatestFrom(this.store.pipe(select(selectBooks))),
  //     mergeMap(([, bookformStore]) => {
  //       if (bookformStore.length > 0) {
  //         return EMPTY;
  //       }
  //       return this.booksService
  //         .get()
  //         .pipe(map((data) => booksFetchAPISuccess({ allBooks: data })));
  //     })
  //   )
  // );

  loadAllBooks$ = createEffect(
    () => 
    this.actions$.pipe(
      ofType(invokeBooksApi),
      exhaustMap(() => {
       return this.booksService.get()
          .pipe(
            map((books)=> booksFetchAPISuccess({allBooks:books}))
          )
      })
    )
  )
}
