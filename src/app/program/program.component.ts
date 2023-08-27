import { ThisReceiver } from '@angular/compiler';
import { Component,Input,OnInit} from '@angular/core';
import { ProgramService } from '../program.service';
import { ProgramModule } from './program.module';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit{
  programmes!:ProgramModule[];
@Input() Program!:ProgramModule;
@Input() index!:number;
mycheckbox:boolean=false;
obj:any;
  user:string="";
constructor(private ProgramService:ProgramService){
  this.obj={};
}
index_obj!:number;
ngOnInit():void{}
onCoche():boolean{
  if (this.mycheckbox===false){
    this.mycheckbox=true;
  }else{
    this.mycheckbox=false;
  }
  return this.mycheckbox;
}
onSelect(index:number){
  this.index_obj=this.index;
  console.log(this.index_obj);
}
onUpdate(selectedIndex: number): void {
  console.log(selectedIndex);
  const tab = this.ProgramService.getAllProgrammes();
  this.obj = tab[selectedIndex];
  this.obj.title = this.user;
  this.ProgramService.getAllProgrammes().splice(selectedIndex, 1, this.obj);
}
}
