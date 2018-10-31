import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'

import { PaginationComponent } from './../../components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule, MatCardModule, MatDividerModule, MatListModule, MatTabsModule, MatTableModule
  ],
  declarations: [PaginationComponent],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule, MatCardModule, MatDividerModule, MatListModule,
    PaginationComponent, MatTabsModule, MatTableModule
  ]
})
export class SharedModule { }
