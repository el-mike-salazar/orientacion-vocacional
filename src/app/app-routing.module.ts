import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { RetroalimentacionComponent } from './components/retroalimentacion/retroalimentacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndicacionComponent } from './components/indicacion/indicacion.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';


const routes: Routes = [
  {path: 'registro/:idPreparatoria', component: RegistroComponent},
  {path: 'indicacion/:idPersona', component: IndicacionComponent},
  {path: 'test/:idPersona', component: TestComponent},
  {path: 'retroalimentacion/:idPersona', component: RetroalimentacionComponent},
  {path: 'estadistica', component: EstadisticaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
