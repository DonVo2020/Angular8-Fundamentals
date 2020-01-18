import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';

// services
import { ApiService } from './shared/services/api.service';
import { CityService } from './shared/services/city.service';
import { MovieService } from './shared/services/movie.service';
import { OrderService } from './shared/services/order.service';
import { AuthService } from './shared/services/auth.service';

// guards
import { CanActivateViaAuthGuard } from './shared/guards/canActivateViaAuthGuard';
import { CanDeactivateGuard } from './shared/guards/canDeactivateGuard';

// Inline providers/function not possible anymore. This
// function is used inside providers: []
export function guardFunction() {
  console.log('Route requested');
  return true; // do validation or other stuff here
}

// components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateComponent } from './shared/components/canDeactivateComponent';
import { LoginComponent } from './login/login.component';

// other componets
import { MainComponent } from './shared/MainComponent';
import { CityDetailComponent } from './shared/components/city-detail.component';
import { CityOrdersComponent } from './shared/components/city-orders.component';
import { CityAddComponent } from './shared/components/city-add.component';

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
import { RouteSimpleComponent } from './020-router-simple/router-simple.component';
import { RouterParameterComponent } from './021-router-parameter/router-parameter.component';
import { RouterGuardsComponent } from './022-router-guards/router-guards.component';
import { FormTemplateDrivenComponent1 } from './023-forms-template-driven/forms-template-driven1.component';
import { FormTemplateDrivenComponent2 } from './023-forms-template-driven/forms-template-driven2.component';
import { FormTemplateDrivenComponent3 } from './023-forms-template-driven/forms-template-driven3.component';
import { FormTemplateDrivenComponent4 } from './023-forms-template-driven/forms-template-driven4.component';


@NgModule({
  declarations: [
    AppComponent,
    CanDeactivateComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
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
    CityAddComponent,
    MainComponent,
    RouteSimpleComponent,
    RouterParameterComponent,
    RouterGuardsComponent,
    FormTemplateDrivenComponent1,
    FormTemplateDrivenComponent2,
    FormTemplateDrivenComponent3,
    FormTemplateDrivenComponent4,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes) // used for router only
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'data-binding', component: DataBindingComponent },
    //  { path: 'event-binding', component: EventBindingComponent },
    //  { path: 'attribute-binding', component: AttributeBindingComponent },
    //  { path: 'two-ways-binding', component: TwoWaysBindingComponent },
    //  { path: 'selection-list', component: SelectionListComponent },
    //  { path: 'services-static', component: ServicesStaticComponent },
    //  { path: 'services-http', component: ServicesHttpComponent },
    //  { path: 'services-rxjs', component: ServicesRXJSComponent },
    //  { path: 'services-cache', component: ServicesCacheComponent },
    //  { path: 'services-apiService', component: ServicesAPIComponent },
    //  { path: 'services-http-CRUD', component: ServicesHttpCRUDComponent },
    //  { path: 'services-async-pipe', component: ServicesAsyncPipeComponent },
    //  { path: 'services-live', component: ServicesLiveComponent },
    //  { path: 'services-live-with-mapping', component: ServicesLiveWithMappingComponent },
    //  { path: 'post-restapi', component: PostRestApiComponent },
    //  { path: 'components', component: ComponentsComponent },
    //  { path: 'components-inputs', component: ComponentsInputsComponent },
    //  { path: 'components-outputs', component: ComponentsOutputsComponent },
    //  { path: 'pubsub-ordercomponent', component: PubSubOrderComponent },
    //  { path: 'router-simple', component: RouteSimpleComponent },
    //  { path: 'router-parameter', component: RouterParameterComponent },
    //  { path: 'router-simple', component: RouteSimpleComponent },
    //  { path: 'router-parameter', component: RouterParameterComponent },
    //  { path: 'add', component: CityAddComponent },
    //  { path: 'detail/:id', component: CityDetailComponent },
    //  { path: 'router-guards', component: RouterGuardsComponent },
    //])
  ],
  providers: [CityService, ApiService, OrderService,
    { provide: MovieService, useClass: MovieService },
    AuthService,
    {
      provide: 'CanAlwaysActivateGuard', // Guard as a function
      useValue: guardFunction
    },
    CanActivateViaAuthGuard,
    CanDeactivateGuard],
  //bootstrap: [MainComponent, AppComponent] // MainComponent is used for router only
  bootstrap: [AppComponent]
})
export class AppModule { }
