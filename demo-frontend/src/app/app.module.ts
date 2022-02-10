import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule, NavItem, BreadcrumbModule, CardModule } from '@lib/demo-core';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';

const NAV_ITEMS: NavItem[] = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: 'users',
    label: 'Users'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule.forRoot({
      appTitle: 'Demo frontend',
      navItems: NAV_ITEMS
    }),
    BreadcrumbModule,
    CardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
