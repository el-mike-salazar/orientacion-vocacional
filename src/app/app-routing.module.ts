import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { RetroalimentacionComponent } from './components/retroalimentacion/retroalimentacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndicacionComponent } from './components/indicacion/indicacion.component';


const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'indicacion', component: IndicacionComponent},
  {path: 'test', component: TestComponent},
  {path: 'retroalimentacion', component: RetroalimentacionComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
