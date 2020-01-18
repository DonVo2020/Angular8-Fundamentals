import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Routing - in its own module
import { AppRoutingModule, routingComponents } from './shared/modules/app.routing.module';
// Services - in its own module
import { AppServicesModule } from "./shared/modules/app.services.module";
// Import Login module w/ Login component
import { LoginModule } from './shared/modules/login.module';
// Pipes
import { FilterPipe } from './shared/pipes/filter.pipe';
import { DefaultImagePipe } from "./shared/pipes/defaultImage.pipe";
// Directives
import { HighlightDirective } from './shared/directives/highlight.directive';

// Inline providers/function not possible anymore. This
// function is used inside providers: []
export function guardFunction() {
  console.log('Route requested');
  return true; // do validation or other stuff here
}

import { AppComponent } from './app.component';
import { MainComponent } from './shared/MainComponent';

@NgModule({
  declarations: [
    MainComponent,
    // Components are now bundled in the routing module
    routingComponents,
    FilterPipe, DefaultImagePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, HttpClientJsonpModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppServicesModule,
  ],
  // providers   : [
	//		Not neccesary anymore, as these are defined in their own module
	// ],
  bootstrap: [MainComponent, AppComponent] // MainComponent is used for router only
  //bootstrap: [AppComponent]
})
export class AppModule { }
