import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { MaterialModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    AppShellModule.runtime()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
