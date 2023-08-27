import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ProgramModule } from '../program/program.module';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit{
  constructor( private ProgramService:ProgramService){}

  programmes!:ProgramModule[];
  index_obj!: number;

  ngOnInit(): void {
    this.programmes=this.ProgramService.getAllProgrammes();
  }



}
