// Routing in its own module - now imported in main module app.module.ts

// 1. Import Router stuff
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

// 2. Import Components
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../home/home.component';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';
import { MainComponent } from '../MainComponent';

// Guards
import { CanActivateViaAuthGuard } from "../guards/canActivateViaAuthGuard";
import { CanDeactivateComponent } from "../components/canDeactivateComponent";
import { CanDeactivateGuard } from "../guards/canDeactivateGuard";
//import { AuthGuard } from '../guards/auth.guard';
import { AuthInterceptorsGuard } from '../guards/auth-interceptors.guard';

// Routing Loader
import { MyCustomPreloader } from '../../app.routing.loader';

import { CityOrdersComponent } from '../components/city-orders.component';
import { CityAddComponent } from "../../shared/components/city-add.component";
import { CityDetailComponent } from "../../shared/components/city-detail.component";
import { LoginMainComponent } from "../../login/login.component";
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
import { PipesDemoComponent } from '../../027-pipes-demo/pipes-demo.component';
import { ScopedStyle1Component } from '../../028-scoped-styles/scoped-styles-1.component';
import { ScopedStyle2Component } from '../../028-scoped-styles/scoped-styles-2.component';
import { HighlightDirectiveComponent } from '../../029-highlight-directive/highlight-directive.component';
import { CarouselDirectiveComponent } from '../../030-carousel-directive/carousel-directive.component';
import { AoTCompilationComponent } from '../../031-aot-compilation/aot-compilation.component';
import { LazyLoadingComponent } from '../../032-lazy-loading/lazy-loading.component';
import { CustomPreloadingComponent } from '../../033-custom-preloading/custom-preloading.component';
import { ContentProjectionComponent } from '../../034-content-projection/content-projection.component';
import { Card1Component } from '../../034-content-projection/card1/card1.component';
import { Card2Component } from '../../034-content-projection/card2/card2.component';
import { Card3Component } from '../../034-content-projection/card3/card3.component';
import { Card4Component } from '../../034-content-projection/card4/card4.component';
import { NewsletterComponent } from '../../034-content-projection/newsletter/newsletter.component';
import { Card5Component } from '../../034-content-projection/card5/card5.component';
import { MyButtonComponent } from '../../034-content-projection/my-button/my-button.component';

import { AuthenticationInterceptorsComponent } from '../../035-authentication-interceptors/authentication-interceptors.component';
import { LoginComponent } from '../../035-authentication-interceptors/login/login.component';
import { HomeBoyComponent } from '../../035-authentication-interceptors/home-boy/home-boy.component';



// 3. Routing table
const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: ['CanAlwaysActivateGuard'] // Function, defined in app.module.ts
    //canActivate: [AuthGuard]
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
    component: LoginMainComponent
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
  { path: 'pipes-demo', component: PipesDemoComponent },
  { path: 'scoped-styles-1', component: ScopedStyle1Component },
  { path: 'highlight-directive', component: HighlightDirectiveComponent },
  { path: 'carousel-directive', component: CarouselDirectiveComponent },
  { path: 'aot-compilation', component: AoTCompilationComponent },
  
  /********************************** PART II ***************************************/
  { path: 'lazy-loading', component: LazyLoadingComponent },
  // New notation for lazy loading (Angular 8+):
  {
    path: 'lazy-loading/customers',
    loadChildren: () => import('../../032-lazy-loading/customer/customer.module')
      .then(mod => mod.CustomerModule)
  },
  {
    path: 'lazy-loading/products',
    loadChildren: () => import('../../032-lazy-loading/products/products.module')
      .then(mod => mod.ProductsModule)
  },
  // Old notation (Angular 4-7)
  //   {path: 'customers', loadChildren: './customer/customer.module#CustomerModule'},
  //   {path: 'products', loadChildren: './products/products.module#ProductsModule'},

  { path: 'custom-preloading', component: CustomPreloadingComponent },
  {
    path: 'custom-preloading/customers',
    loadChildren: () => import('../../033-custom-preloading/customer/customer.module')
      .then(mod => mod.CustomerModule)
  },
  {
    path: 'custom-preloading/products',
    loadChildren: () => import('../../033-custom-preloading/products/products.module')
      .then(mod => mod.ProductsModule)
  },
  {
    path: 'custom-preloading/big-module',
    loadChildren: '../../033-custom-preloading/very-big-module.module#VeryBigModule'
  },
  { path: 'content-projection', component: ContentProjectionComponent },
  { path: 'authentication-interceptors', component: AuthenticationInterceptorsComponent },
  {
    path: 'authentication-interceptors/home-boy',
    component: HomeBoyComponent
  },
  {
    path: 'authentication-interceptors/login',
    component: LoginComponent
  },
  {
    path: 'authentication-interceptors/users',
    loadChildren: '../../035-authentication-interceptors/users/users.module#UsersModule',
    canActivate: [AuthInterceptorsGuard]
  },
/************************************* end of PART II ****************************************/

  {
    // catch all route
    path: '**',
    redirectTo: 'home'
  }
];

// 4. Declare *new* NgModule!
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: [MyCustomPreloader]
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
  PipesDemoComponent,
  ScopedStyle1Component,
  ScopedStyle2Component,
  HighlightDirectiveComponent,
  CarouselDirectiveComponent,
  AoTCompilationComponent,
  LazyLoadingComponent,
  CustomPreloadingComponent,
  ContentProjectionComponent,
  Card1Component,
  Card2Component,
  Card3Component,
  Card4Component,
  NewsletterComponent,
  Card5Component,
  MyButtonComponent,
  AuthenticationInterceptorsComponent,
  HomeBoyComponent,
  LoginComponent,
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false, // turn on for console.logging of routing events
  // preloadingStrategy: PreloadAllModules // uncomment to load all modules lazily
};

RouterModule.forRoot(AppRoutes, config);
