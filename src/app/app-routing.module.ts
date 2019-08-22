import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { PayComponent } from './pages/pay/pay.component';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: '**',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
