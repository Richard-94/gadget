import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './Authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { MdModule } from './modules/md/md.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

import { AuthInterInterceptor } from './Interceptor/auth-inter.interceptor';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { AuthGuard } from './Guards/auth-guard.service';
import { AllWorkersComponent } from './all-info/all-workers/all-workers.component';
import { AllGadgetsComponent } from './all-info/all-workers/all-gadgets/all-gadgets.component';
import { AssignedGadgetsComponent } from './all-info/assigned-gadgets/assigned-gadgets.component';
import { AssignGadgetComponent } from './all-info/assign-gadget/assign-gadget.component';
import { adminGuard } from './Guards/admin.guard';
import { AuthService } from './Data-Services/services/auth.service';
import { ContentComponent } from './home/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ContentComponent,
    AllWorkersComponent,
    AllGadgetsComponent,
    AssignedGadgetsComponent,
    AssignGadgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MdModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent,

      },

      {
        path:'content',
        component:ContentComponent,
        canActivate:[AuthGuard]

      },
      {
        path:'all-workers',
        component:AllWorkersComponent,

      },

      {
        path:'all-gadgets',
        component:AllGadgetsComponent,

      },

      {
        path:'assigned-gadget',
        component:AssignedGadgetsComponent,

      },

      {
        path:'assign-gadget',
        component:AssignGadgetComponent,
        canActivate:[adminGuard]

      },

      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterInterceptor, multi: true },
    AuthService,
    adminGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// npm install @auth0/angular-jwt --save
