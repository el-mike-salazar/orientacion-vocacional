import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { RetroalimentacionComponent } from './components/retroalimentacion/retroalimentacion.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndicacionComponent } from './components/indicacion/indicacion.component';
import { HttpClientModule } from '@angular/common/http';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RetroalimentacionComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    IndicacionComponent,
    EstadisticaComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
