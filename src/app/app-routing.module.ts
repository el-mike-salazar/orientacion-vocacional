import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { RetroalimentacionComponent } from './components/retroalimentacion/retroalimentacion.component';


const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'retroalimentacion', component: RetroalimentacionComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'test' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
