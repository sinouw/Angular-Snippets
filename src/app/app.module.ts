import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyCXBXMcwmTvyMqxcWDt-9nuKDsH4e7rU3E"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
