import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role = this.route.snapshot.paramMap.get('userRole');
  uid = this.route.snapshot.paramMap.get('uid');
  parentMessage = this.uid
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {


  }

}
