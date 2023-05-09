import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TargetGuard } from './target.guard';

const routes: Routes = [
  {
    path: 'list-jsons',
    loadChildren: () =>
      import('./list-jsons/list-jsons.module').then((m) => m.ListJsonsModule),
  },
  { path: '**', component: AppComponent, canActivate: [TargetGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
