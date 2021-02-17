import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  submit(agentName: string, agentPassword: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let params = new HttpParams().set("agentName", agentName).set("agentPassword", agentPassword);
    this.httpClient.get('http://localhost:3030/parcel/login', { headers: headers, params: params }).subscribe((res: any) => {
      const variable = res;
      if (res.message) {
        this.router.navigate(['/dashboard', res.role, res.uid]);
      }

    }
    )
  }
}
