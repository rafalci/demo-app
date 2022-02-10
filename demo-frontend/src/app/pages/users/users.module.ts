import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListService } from './services/user-list.service';
import { DataTableModule } from '@lib/demo-core';
import { ProxyModule } from '@lib/proxy';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      breadcrumb: 'Users'
    }
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTableModule,
    ProxyModule
  ],
  declarations: [UserListComponent],
  providers: [UserListService]
})
export class UsersModule { }
