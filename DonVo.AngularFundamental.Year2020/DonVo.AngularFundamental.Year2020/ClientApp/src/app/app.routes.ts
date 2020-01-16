import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
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
import { CityAddComponent } from "./shared/components/city-add.component";
import { RouterParameterComponent } from './021-router-parameter/router-parameter.component';

// Routing table in this application.
// The table is loaded via app.module.ts.
// If your application has a routing *module*, the routing table is
// often inside the file with the module. (as is the case with ng new <name> --routing)
export const AppRoutes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
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
  { path: 'add', component: CityAddComponent },
  {
    // catch all route
    path: '**',
    redirectTo: 'home'
  },
];
