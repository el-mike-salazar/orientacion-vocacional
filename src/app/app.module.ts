import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { RetroalimentacionComponent } from './components/retroalimentacion/retroalimentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RetroalimentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
