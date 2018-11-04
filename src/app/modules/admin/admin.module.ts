import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { AdminComponent } from './admin/admin.component';
import { AmenitiesComponent, AmenitiesDialog } from './amenities/amenities.component';
import { SpecificationsComponent, SpecificationDialog } from './specifications/specifications.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { BhkUnitsComponent, BhkUnitsDialog } from './bhk-units/bhk-units.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AdminComponent, AmenitiesComponent, AdminSettingsComponent, 
    SpecificationsComponent, BhkUnitsComponent, SpecificationDialog,AmenitiesDialog,BhkUnitsDialog],
    entryComponents: [SpecificationsComponent, SpecificationDialog,AmenitiesDialog,BhkUnitsDialog]
})
export class AdminModule { }
