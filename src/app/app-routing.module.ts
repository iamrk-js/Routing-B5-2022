import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";
import { EditProductComponent } from "./shared/components/products/edit-product/edit-product.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { EdituserComponent } from "./shared/components/users/edituser/edituser.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { AuthGaurd } from "./shared/service/auth.guard";


const appRoute: Routes = [
  {
    path: '', component: LoginComponent, title: "Login" // localhost:4200 >>> HomeComponent
  },
  {
    path: 'dashboard', component: HomeComponent  // localhost:4200/home
  },
  {
    path: 'products', component: ProductsComponent, canActivateChild: [AuthGaurd], title: "Products", children: [
      {
        path: ':id', component: ProductComponent
      },
      {
        path: ':id/edit', component: EditProductComponent
      },
    ]
  },

  {
    path: "users", component: UsersComponent, canActivateChild: [AuthGaurd], title: "Users", children: [
      {
        path: ":userid", component: UserComponent
      },
      {
        path: ":userid/edit", component: EdituserComponent
      }
    ]
  },

  {
    path: 'page-not-found', component: PagenotfoundComponent
  },
  {
    path: "**", redirectTo: 'page-not-found'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}