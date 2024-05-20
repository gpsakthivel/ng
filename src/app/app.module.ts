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
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MaintenanceComponent } from './layout/maintenance/maintenance.component';
import { LayoutModule } from './layout/layout.module';
import { CiFormComponent } from './practise/kiosk-forms/ci-form/ci-form.component';
import { CoFormComponent } from './practise/kiosk-forms/co-form/co-form.component';
import { RpFormComponent } from './practise/kiosk-forms/rp-form/rp-form.component';
import { FirstNameComponent } from './practise/kiosk-forms/form/first-name/first-name.component';
import { LastNameComponent } from './practise/kiosk-forms/form/last-name/last-name.component';
import { RoomNumberComponent } from './practise/kiosk-forms/form/room-number/room-number.component';
import { ConfirmationNumberComponent } from './practise/kiosk-forms/form/confirmation-number/confirmation-number.component';
import { SingleResponsibiltyComponent } from './practise/solid-principle/single-responsibilty/single-responsibilty.component';
import { OpenClosedComponent } from './practise/solid-principle/open-closed/open-closed.component';
import { LiskovSubstitutionComponent } from './practise/solid-principle/liskov-substitution/liskov-substitution.component';
import { InterfaceSegregationComponent } from './practise/solid-principle/interface-segregation/interface-segregation.component';
import { DependencyInversionComponent } from './practise/solid-principle/dependency-inversion/dependency-inversion.component';
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
    NotFoundComponent,
    MaintenanceComponent,
    CiFormComponent,
    CoFormComponent,
    RpFormComponent,
    FirstNameComponent,
    LastNameComponent,
    RoomNumberComponent,
    ConfirmationNumberComponent,
    SingleResponsibiltyComponent,
    OpenClosedComponent,
    LiskovSubstitutionComponent,
    InterfaceSegregationComponent,
    DependencyInversionComponent
    // For ng form learning
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
