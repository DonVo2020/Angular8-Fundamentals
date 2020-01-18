// Routing in its own module - now imported in main module app.module.ts

// 1. Import Router stuff
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 2. Import Components
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../home/home.component';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';
import { MainComponent } from '../MainComponent';

// Guards
import { CanActivateViaAuthGuard } from "../../shared/guards/canActivateViaAuthGuard";
import { CanDeactivateComponent } from "../../shared/components/canDeactivateComponent";
import { CanDeactivateGuard } from "../../shared/guards/canDeactivateGuard";

import { CityOrdersComponent } from '../components/city-orders.component';
import { CityAddComponent } from "../../shared/components/city-add.component";
import { CityDetailComponent } from "../../shared/components/city-detail.component";
import { LoginComponent } from "../../login/login.component";
import { DataBindingComponent } from '../../001-data-binding/data-binding.component';
import { EventBindingComponent } from '../../002-event-binding/event-binding.component';
import { AttributeBindingComponent } from '../../003-attribute-binding/attribute-binding.component';
import { TwoWaysBindingComponent } from '../../004-two-ways-binding/two-ways-binding.component';
import { SelectionListComponent } from '../../005-selection-list/selection-list.component';
import { ServicesStaticComponent } from '../../006-services-static/services-static.component';
import { ServicesHttpComponent } from '../../007-services-http/services-http.component';
import { ServicesRXJSComponent } from '../../008-services-rxjs/services-rxjs.component';
import { ServicesCacheComponent } from '../../009-services-cache/services-cache.component';
import { ServicesAPIComponent } from '../../010-services-apiService/services-apiService.component';
import { ServicesHttpCRUDComponent } from '../../011-services-http-CRUD/services-http-CRUD.component';
import { ServicesAsyncPipeComponent } from '../../012-services-async-pipe/services-async-pipe.component';
import { ServicesLiveComponent } from '../../013-services-live/services-live.component';
import { ServicesLiveWithMappingComponent } from '../../014-services-live-with-mapping/services-live-with-mapping.component';
import { PostRestApiComponent } from '../../015-post-restapi/post-restapi.component';
import { ComponentsComponent } from '../../016-components/components.component';
import { ComponentsInputsComponent } from '../../017-components-inputs/components-inputs.component';
import { ComponentsOutputsComponent } from '../../018-components-outputs/components-outputs.component';
import { PubSubOrderComponent } from '../../019-pubsub-ordercomponent/pubsub-ordercomponent.component';
import { RouteSimpleComponent } from '../../020-router-simple/router-simple.component';
import { RouterParameterComponent } from '../../021-router-parameter/router-parameter.component';
import { RouterGuardsComponent } from '../../022-router-guards/router-guards.component';
import { FormTemplateDrivenComponent1 } from '../../023-forms-template-driven/forms-template-driven1.component';
import { FormTemplateDrivenComponent2 } from '../../023-forms-template-driven/forms-template-driven2.component';
import { FormTemplateDrivenComponent3 } from '../../023-forms-template-driven/forms-template-driven3.component';
import { FormTemplateDrivenComponent4 } from '../../023-forms-template-driven/forms-template-driven4.component';
import { FormsModelDriven1Component } from '../../024-forms-model-driven/forms-model-driven1.component';
import { FormsModelDriven2Component } from '../../024-forms-model-driven/forms-model-driven2.component';
import { FormsTypeAHeadComponent } from '../../025-forms-typeahead/forms-typeahead.component';
import { MultipleModulesComponent } from '../../026-multiple-modules/multiple-modules.component';

// 3. Routing table
const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: ['CanAlwaysActivateGuard'] // Function, defined in app.module.ts
  },
  {
    path: 'add',
    component: CityAddComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'deactivate',
    component: CanDeactivateComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'detail/:id',
    component: CityDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
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
  { path: 'router-simple', component: RouteSimpleComponent },
  { path: 'router-parameter', component: RouterParameterComponent },
  { path: 'detail/:id', component: CityDetailComponent },
  { path: 'router-guards', component: RouterGuardsComponent },
  { path: 'forms-template-driven1', component: FormTemplateDrivenComponent1 },
  { path: 'forms-template-driven2', component: FormTemplateDrivenComponent2 },
  { path: 'forms-template-driven3', component: FormTemplateDrivenComponent3 },
  { path: 'forms-template-driven4', component: FormTemplateDrivenComponent4 },
  { path: 'forms-model-driven1', component: FormsModelDriven1Component },
  { path: 'forms-model-driven2', component: FormsModelDriven2Component },
  { path: 'forms-typeahead', component: FormsTypeAHeadComponent },
  { path: 'multiple-modules', component: MultipleModulesComponent },
  {
    // catch all route
    path: '**',
    redirectTo: 'home'
  }
];

// 4. Declare *new* NgModule!
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [
  AppComponent,
  CanDeactivateComponent,
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
  CityAddComponent,
  MainComponent,
  RouteSimpleComponent,
  RouterParameterComponent,
  RouterGuardsComponent,
  FormTemplateDrivenComponent1,
  FormTemplateDrivenComponent2,
  FormTemplateDrivenComponent3,
  FormTemplateDrivenComponent4,
  FormsModelDriven1Component,
  FormsModelDriven2Component,
  FormsTypeAHeadComponent,
  MultipleModulesComponent,
];
