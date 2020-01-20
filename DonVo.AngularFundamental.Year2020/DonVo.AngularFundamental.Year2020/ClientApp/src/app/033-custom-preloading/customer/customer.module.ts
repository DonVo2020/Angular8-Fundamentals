import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import shared module (with search field)
import { SearchModule } from '../search/search.module';

// components for this module
import { CustomerComponent } from './customer.component';

// Lazy loaded routes for this module
const customerRoutes: Routes = [
  { path: '', component: CustomerComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports: [CustomerComponent], // component must be exported, otherwise it can't be used in other modules
  declarations: [CustomerComponent]
})
export class CustomerModule {
}
console.log('CustomerModule loaded lazily...');
