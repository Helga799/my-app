import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  brews: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    // subscribe(f1, f2);
    this.http.getBeer()
      .subscribe(
        res => {
          console.log(res);
          this.brews = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  callServiceMethod() {
    return this.http.getBeer();
  }
}
