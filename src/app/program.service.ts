import { Injectable } from '@angular/core';
import { ProgramModule } from './program/program.module';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  i:number=0;
programmes:ProgramModule[]=[
  {id:1,title:'Voyage a Djerba',done:false},
  {id:2,title:'Voyage a Madrid',done:true}
];
getAllProgrammes():ProgramModule[]{
  return this.programmes;
}
onAddProgrammes(title:string):ProgramModule[]{
  const tab={id:this.programmes.length+1,title:title,done:false} ;
   this.programmes.push(tab);
  return this.programmes;
  }
}
