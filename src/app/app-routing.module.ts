// For ng generated imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// For RXJS learning imports
import { RxjsComponent } from './tutorials/rxjs/rxjs.component';
// For ng form imports
import { TdfComponent } from './tutorials/ng-form/tdf/tdf.component';

const routes: Routes = [
  // For RXJS learning imports
  {
  path: 'rxjs',
  component: RxjsComponent,
  },
  // For ng form imports
  {
    path: 'ng-form',
    component: TdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
