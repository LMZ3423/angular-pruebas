import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFromAnotherComponent } from '../create-from-another/create-from-another.component';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.scss']
})
export class CrearSolicitudComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog():void{
    const dialogRef = this.dialog.open(CreateFromAnotherComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
