import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EditparcelService {

  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<any> {
    return (this.httpClient.get("http://localhost:3030/parcel/parcelDetails"));

  }

  getDetailsById(id: any): Observable<any> {
    return (this.httpClient.get("http://localhost:3030/parcel/parcelDetails/" + id));

  }
}
