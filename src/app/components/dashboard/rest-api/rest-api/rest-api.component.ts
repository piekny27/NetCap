import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable} from 'rxjs';

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
    { id: 0, viewValue: 'Get first 3 laptops sorted by "id".', url: (RestApiComponent.dbURL + "laptops.json?print=pretty&orderBy=\"id\"&limitToFirst=3")},
    { id: 1, viewValue: 'Get all published laptops', url: (RestApiComponent.dbURL + "laptops.json?orderBy=\"published\"&equalTo=true")},
    { id: 2, viewValue: 'Get 3 most expensive laptops', url: (RestApiComponent.dbURL + "laptops.json?print=pretty&orderBy=\"price/price\"&limitToLast=3")}
  ];

  makeRequest(url:string){
    if(url !== undefined){
      this.getLaptops(url).subscribe(
        response => {
          this.textField = JSON.stringify(response,undefined, 4);
        }
        );
    }
  }

  downloadCurrent(){
    window.open(this.currentItem!, '_blank');
  }

  public getLaptops(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(catchError(() => this.textField = ""));
  }
}
