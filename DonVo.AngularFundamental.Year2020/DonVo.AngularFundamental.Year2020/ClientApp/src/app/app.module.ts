import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// services
import { ApiService } from './shared/services/api.service';
import { CityService } from './shared/services/city.service';
import { MovieService } from './shared/services/movie.service';
import { OrderService } from './shared/services/order.service';

// components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

// other componets
import { CityDetailComponent } from './shared/components/city-detail.component';
import { CityOrdersComponent } from './shared/components/city-orders.component';

// template components
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
import { ServicesHttpCRUDComponent } from './011-services-http-CRUD/services-http-CRUD.component';
import { ServicesAsyncPipeComponent } from './012-services-async-pipe/services-async-pipe.component';
import { ServicesLiveComponent } from './013-services-live/services-live.component';
import { ServicesLiveWithMappingComponent } from './014-services-live-with-mapping/services-live-with-mapping.component';
import { PostRestApiComponent } from './015-post-restapi/post-restapi.component';
import { ComponentsComponent } from './016-components/components.component';
import { ComponentsInputsComponent } from './017-components-inputs/components-inputs.component';
import { ComponentsOutputsComponent } from './018-components-outputs/components-outputs.component';
import { PubSubOrderComponent } from './019-pubsub-ordercomponent/pubsub-ordercomponent.component';


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
    ServicesHttpCRUDComponent,
    ServicesAsyncPipeComponent,
    ServicesLiveComponent,
    ServicesLiveWithMappingComponent,
    PostRestApiComponent,
    CityDetailComponent,
    ComponentsComponent,
    ComponentsInputsComponent,
    ComponentsOutputsComponent,
    CityOrdersComponent,
    PubSubOrderComponent,
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
      { path: 'services-http-CRUD', component: ServicesHttpCRUDComponent },
      { path: 'services-async-pipe', component: ServicesAsyncPipeComponent },
      { path: 'services-live', component: ServicesLiveComponent },
      { path: 'services-live-with-mapping', component: ServicesLiveWithMappingComponent },
      { path: 'post-restapi', component: PostRestApiComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'components-inputs', component: ComponentsInputsComponent },
      { path: 'components-outputs', component: ComponentsOutputsComponent },
      { path: 'pubsub-ordercomponent', component: PubSubOrderComponent },
    ])
  ],
  providers: [CityService, ApiService, OrderService,
              { provide: MovieService, useClass: MovieService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
