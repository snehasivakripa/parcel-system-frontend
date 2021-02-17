import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service'
import { EditparcelService } from '../services/editparcel.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService, private editParcelService: EditparcelService) { }

  var1 = true;
  var2 = false;
  agentName: any;
  parcelNumber: any;
  parcelItem: any;
  parcelAddress: any;
  agentNumber: any;
  status: any;
  obj: any;
  objs: any;
  Object = Object;
  agentId: any;

  ngOnInit(): void {

    this.adminService.getDetails().subscribe((response) => {

      this.obj = response

    });
  }

  submit() {
    this.adminService.addParcel(this.agentName, this.agentNumber, this.agentId, this.parcelAddress, this.parcelItem, this.parcelNumber, this.status);
    this.agentName='',
    this.agentNumber='',
    this.agentId='',
    this.parcelAddress='',
    this.parcelItem='',
    this.parcelNumber='',
    this.status=''
  }

  delete(parcelId: any) {
    this.adminService.delete(parcelId);
  }

  edit(id: any) {
    this.editParcelService.getDetailsById(id);
  }

  func() {
    this.var1 = false;
    this.var2 = true;
  }
  back(){
    this.var1 = true;
    this.var2 = false;
  }
}


