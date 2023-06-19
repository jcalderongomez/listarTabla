import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  
  
})
export class TablesModule { }
