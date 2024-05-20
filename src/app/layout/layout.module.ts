import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, MainComponent, FooterComponent,
    SidebarComponent,]
})
export class LayoutModule { }
