// For ng generated imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// For RXJS learning imports
import { RxjsComponent } from './tutorials/rxjs/rxjs.component';
import { TdfComponent } from './tutorials/ng-form/tdf/tdf.component';
import { RfComponent } from './tutorials/ng-form/rf/rf.component';
import { HomeComponent } from './tutorials/ng-form/home/home.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MaintenanceComponent } from './layout/maintenance/maintenance.component';
// For ng form imports

@NgModule({
  declarations: [
    AppComponent,
    // For RXJS learning
    RxjsComponent,
    TdfComponent,
    RfComponent,
    HomeComponent,
    GettingStartedComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    MaintenanceComponent
    // For ng form learning
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
