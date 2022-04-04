import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public GETSiswa: any;
  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this._Getdata();
  }

  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/Ci-api/index.php/Api/GetData');
    data.subscribe((result) => {
      this.GETSiswa = result;
      console.log(result);
    });
  }
}