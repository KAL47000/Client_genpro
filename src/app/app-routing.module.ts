import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { ClientComponent } from './components/client/client.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent}, 
  {path: 'clients', component:ClientComponent},
  {path: 'clients/:id', component:ClientItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
