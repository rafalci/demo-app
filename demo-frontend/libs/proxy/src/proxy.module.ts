import { NgModule } from '@angular/core';
import { UsersService } from './api/api';

@NgModule({
  providers: [
    UsersService
  ]
})
export class ProxyModule { }
