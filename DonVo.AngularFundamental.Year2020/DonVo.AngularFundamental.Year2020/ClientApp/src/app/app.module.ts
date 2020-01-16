import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// services
import { ApiService } from './shared/services/api.service';
import { CityService } from './shared/services/city.service';

// components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { DataBindingComponent } from './001-data-binding/data-binding.component';
import { EventBindingComponent } from './002-event-binding/event-binding.component';
import { AttributeBindingComponent } from './003-attribute-binding/attribute-binding.component';
import { TwoWaysBindingComponent } from './004-two-ways-binding/two-ways-binding.component';
import { SelectionListComponent } from './005-selection-list/selection-list.component';
import { ServicesStaticComponent } from './006-services-static/services-static.component';
import { ServicesHttpComponent } from './007-services-http/services-http.component';
import { ServicesRXJSComponent } from './008-services-rxjs/services-rxjs.component';
import { ServicesCacheComponent } from './009-services-cache/services-cache.component';
import { ServicesAPIComponent } from './010-services-apiService/services-apiService.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DataBindingComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    TwoWaysBindingComponent,
    SelectionListComponent,
    ServicesStaticComponent,
    ServicesHttpComponent,
    ServicesRXJSComponent,
    ServicesCacheComponent,
    ServicesAPIComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'attribute-binding', component: AttributeBindingComponent },
      { path: 'two-ways-binding', component: TwoWaysBindingComponent },
      { path: 'selection-list', component: SelectionListComponent },
      { path: 'services-static', component: ServicesStaticComponent },
      { path: 'services-http', component: ServicesHttpComponent },
      { path: 'services-rxjs', component: ServicesRXJSComponent },
      { path: 'services-cache', component: ServicesCacheComponent },
      { path: 'services-apiService', component: ServicesAPIComponent },
    ])
  ],
  providers: [CityService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
