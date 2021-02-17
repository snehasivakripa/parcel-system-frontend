import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service'
import { Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  obj: any;
  @Input() id: any = '';

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agentService.getDetails(this.id).subscribe((response) => {
      this.obj = response

    });
  }


  enabled = [false, false, false];
  saveStatus(id: string, status: any) {
    if (status) { this.agentService.changeStatus(id, "Deliveed") }
    else { this.agentService.changeStatus(id, "Processing") }

  }
}
