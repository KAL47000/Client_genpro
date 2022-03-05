import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ClientComponent } from './components/client/client.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientComponent,
    ClientItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
