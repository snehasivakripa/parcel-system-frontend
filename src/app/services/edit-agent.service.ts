import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgAgentDetail } from '../json/agent';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditAgentService {

  constructor(private httpClient: HttpClient) { }

  addAgent(agentName: any, agentNumber: any, agentPassword: any, role: any) {

    var agent: AgAgentDetail = <any>{};
    agent.agentName = agentName;
    agent.agentNumber = agentNumber;
    agent.agentPassword = agentPassword;
    agent.role = role;
    this.httpClient.post('http://localhost:3030/parcel/addAgent', agent).subscribe((res: any) => {
      const variable = res;
    })
  }

  delete(id: any) {
    this.httpClient.delete('http://localhost:3030/parcel/removeAgent/' + id).subscribe((res: any) => {
      const variable = res;
    });
  }

  getDetails(): Observable<any> {
    return (this.httpClient.get("http://localhost:3030/parcel/agentDetails"));

  }


}
