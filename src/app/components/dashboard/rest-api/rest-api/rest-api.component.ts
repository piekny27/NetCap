import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { saveAs } from 'file-saver';

interface Requests {
  id: number;
  url: string;
  viewValue: string;
}

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})

export class RestApiComponent {

  constructor(private http: HttpClient){}
  textField:string = "";
  currentItem?: string;

  static dbURL: string = 'https://netcap-f23e0-default-rtdb.europe-west1.firebasedatabase.app/';

  requests: Requests[] = [
    { id: 0, viewValue: 'Get all laptops sorted by "info".', url: (RestApiComponent.dbURL + "laptops.json?orderBy=\"info\"&startAt=3&print=pretty")},
    { id: 1, viewValue: 'Get asdfs', url: (RestApiComponent.dbURL + "alaptops.json?orderBy=\"info\"&startAt=3&print=pretty")},
    { id: 2, viewValue: 'Get bbbbbb', url: (RestApiComponent.dbURL + "balaptops.json?orderBy=\"info\"&startAt=3&print=pretty")}
  ];

  makeRequest(){
    if(this.currentItem !== undefined){
      this.getLaptops(this.currentItem).subscribe(
        response => {
          this.textField = JSON.stringify(response,undefined, 4);
        }
        );
    }
  }

  downloadCurrent(){
    saveAs(this.currentItem!, "restapi.json")
  }

  public getLaptops(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(catchError(() => this.textField = ""));
  }
}
