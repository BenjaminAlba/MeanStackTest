import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { CreateContainerComponent } from './create-container/create-container.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { ViewCharacterListComponent } from './view-character-list/view-character-list.component';
import { ViewCharacterInfoComponent } from './view-character-info/view-character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutContainerComponent,
    AboutPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CreatePageComponent,
    CreateContainerComponent,
    CreateFormComponent,
    ViewPageComponent,
    ViewContainerComponent,
    ViewCharacterListComponent,
    ViewCharacterInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
