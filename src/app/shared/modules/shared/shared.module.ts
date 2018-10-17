import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
    , MatMenuModule, MatIconModule
  ]
})
export class SharedModule { }
