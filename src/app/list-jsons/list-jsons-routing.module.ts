import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJsonsComponent } from './list-jsons.component';

const routes: Routes = [
  {
    path: '',
    component: ListJsonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListJsonsRoutingModule {}
