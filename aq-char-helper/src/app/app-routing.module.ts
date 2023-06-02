import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ViewCharacterInfoComponent } from './view-character-info/view-character-info.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent, pathMatch: "full" },
  { path: '', redirectTo: 'about', pathMatch: "full" },
  { path: 'login', component: LoginPageComponent, pathMatch: "full" },
  { path: 'signup', component: SignupPageComponent, pathMatch: "full" },
  { path: 'create', component: CreatePageComponent, pathMatch: "full" },
  { path: 'view', component: ViewPageComponent, pathMatch: "full" },
  { path: 'view/:id', component: ViewCharacterInfoComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }