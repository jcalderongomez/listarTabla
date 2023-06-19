import { Component } from '@angular/core';
import { ListarService } from '../listar.service';
import { IFlight } from 'src/app/Interfaces/IFlight';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  displayedColumns: string[] = ['departureStation','arrivalStation','flightCarrier','flightNumber','price'];

  dataSource = new MatTableDataSource<IFlight>();
  
  flight: IFlight[] = [];
  
  constructor(private listarService: ListarService){}
  

ngOnInit():void{
  this.getResultados();
}

  getResultados() {

    this.listarService.getListarVuelos().subscribe((data:any) =>{

      this.dataSource = new MatTableDataSource<IFlight>(data as IFlight[]);
      console.log(data);
    });
      

  }

}

  