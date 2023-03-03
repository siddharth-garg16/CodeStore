import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit{
  constructor(){}

  getData(data:string){
    return of(data+' purchased')
  }

  ngOnInit(): void {
    const source = from(['phone', 'laptop', 'camera'])

    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe( res => 
      console.log(res)
    )
  }
}
