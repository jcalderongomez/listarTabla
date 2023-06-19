import { Injectable } from '@angular/core';
import { IFlight } from '../Interfaces/IFlight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint;

  resultados:  IFlight[] = [];
  
  constructor(private http:HttpClient) { }

  getListarVuelos():Observable<IFlight>
  {
    console.log(this.apiUrl);
    return this.http.get<IFlight>(`${this.apiUrl}`)
  }
  
}