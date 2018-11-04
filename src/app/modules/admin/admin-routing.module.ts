import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { BhkUnitsComponent } from './bhk-units/bhk-units.component';

import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

const routes: Routes = [
  {
    path: '',
    // component: AdminComponent
    component: AmenitiesComponent
  },
  {
    path: 'amenities',
    component: AmenitiesComponent
  },
  {
    path: 'setting',
    component: AdminSettingsComponent
  },
  {
    path: 'specifications',
    component: SpecificationsComponent
  },
  {
    path: 'bhk_units',
    component: BhkUnitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
