import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ParcelDetail } from '../json/user';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private httpClient: HttpClient) { }

  getDetails(id: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let params = new HttpParams().set("id", id);
    return this.httpClient.get('http://localhost:3030/parcel/agentDetailsById', { headers: headers, params: params });
  }

  changeStatus(id: string, s: string) {
    var parcel: ParcelDetail = <any>{};
    parcel.parcelStatus = s;
    parcel.parcelId = id;
    return this.httpClient.put('http://localhost:3030/parcel/changeStatus', parcel).subscribe((res: any) => {
      const variable = res;
    })
  }



}
