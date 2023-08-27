import { Component,OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ProgramListComponent } from '../program-list/program-list.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  constructor(private ProgramService:ProgramService){}
  user_name:string="";


  ngOnInit(){

  }
  onAjout(){
    this.ProgramService.programmes=this.ProgramService.onAddProgrammes(this.user_name);
  }


}
