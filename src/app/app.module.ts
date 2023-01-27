import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { EdituserComponent } from './shared/components/users/edituser/edituser.component';
import { LoginComponent } from './shared/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent,
    PagenotfoundComponent,
    EdituserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
