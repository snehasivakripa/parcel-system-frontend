import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { ParcelDetail } from '../json/user';
import { AgAgentDetail } from '../json/agent';
@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<any> {
    return (this.httpClient.get("http://localhost:3030/parcel/parcelDetails"));
  }

  addParcel(agentName: any, agentNumber: any, agentId: any, parcelAddress: any, parcelItem: any, parcelNumber: any, status: any,) {
    var parcel: ParcelDetail = <any>{};
    var agent: AgAgentDetail = <any>{};
    agent.agentName = agentName
    agent.agentNumber = agentNumber;
    parcel.parcelItem = parcelItem;
    parcel.parcelAddress = parcelAddress;
    parcel.parcelNumber = parcelNumber;
    parcel.parcelStatus = status;
    parcel.agentId = agentId;
    parcel.agentName = agentName;
    parcel.agentNumber = agentNumber;
    this.httpClient.post('http://localhost:3030/parcel/addDeliveryEntry', parcel).subscribe((res: any) => {
      const variable = res;
    })
  }

  delete(id: any) {
    this.httpClient.delete('http://localhost:3030/parcel/deleteParcelEntries/' + id).subscribe((res: any) => {
      const variable = res;
    });
  }
}
