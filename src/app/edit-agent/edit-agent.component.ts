import { Component, OnInit } from '@angular/core';
import { EditAgentService } from '../services/edit-agent.service';
import { AgAgentDetail } from '../json/agent';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {



  var1 = true;
  var2 = false;
  agentName: string = '';
  agentNumber: string = '';
  password: string = '';
  role: string = '';
  obj: any

  constructor(private editAgentService: EditAgentService) { }

  ngOnInit(): void {
    this.editAgentService.getDetails().subscribe((response) => {
      this.obj = response
    });
  }
  myFunction() {
    this.var1 = false;
    this.var2 = true;
  }
  submit() {
    this.editAgentService.addAgent(this.agentName, this.agentNumber, this.password, this.role);
    this.agentName = '', this.agentNumber = '', this.password = '', this.role = ''

  }

  back() {
    this.var1 = true;
    this.var2 = false;
  }

  deleteAgent(id: any) {
    this.editAgentService.delete(id);
  }
}
