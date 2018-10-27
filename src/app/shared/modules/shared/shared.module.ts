import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { PaginationComponent } from './../../components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule, MatCardModule, MatDividerModule, MatListModule
  ],
  declarations: [PaginationComponent],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule, MatCardModule, MatDividerModule, MatListModule,
    PaginationComponent
  ]
})
export class SharedModule { }
