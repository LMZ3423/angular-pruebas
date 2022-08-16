import { ConsultaList } from './../../../shared/model/core/ConsultaList.model';
import { CreateFromAnotherService } from './create-from-another.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';



@Component({
  selector: 'app-create-from-another',
  templateUrl: './create-from-another.component.html',
  styleUrls: ['./create-from-another.component.scss']
})
export class CreateFromAnotherComponent implements OnInit {


  objAsk: ConsultaList<number>;
  objResp: ConsultaList<number> = new ConsultaList;
  regList: number[];
  objNumber: number;
  

  constructor(


    private CFAService: CreateFromAnotherService,
    public dialogRef: MatDialogRef<CreateFromAnotherComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }


  ngOnInit(): void {
    // this.findToCreate();
  }

  findToCreate(){
    this.objResp = new ConsultaList<number>();
    this.objAsk = new ConsultaList<number>();
    this.objAsk.param4=1;
    this.objResp.list=[];
    this.objResp.list.push();
    this.regList=[];
    // this.objetoNumber = new number;
    this.regList[0]=this.objNumber;
    this.objAsk.list = this.regList;


    this.CFAService.createAnotherService(this.objAsk).subscribe(res => {
      this.objResp = res;
      console.log(res)
      this.regList = this.objResp.list;
    });

  }




}
