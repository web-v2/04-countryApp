import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
