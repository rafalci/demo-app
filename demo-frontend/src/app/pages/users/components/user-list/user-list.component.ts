import { Component, ChangeDetectionStrategy } from '@angular/core';
import { USERS_TABLE_DEFINITION } from './table-config';
import { TableDefinition } from '@lib/demo-core';
import { UserDto } from '@lib/proxy';
import { Observable } from 'rxjs';
import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  public tableDefinition: TableDefinition<UserDto, number>;
  public data$: Observable<UserDto[]>;
  public isDataLoading$: Observable<boolean>;

  constructor(readonly userListService: UserListService) {
    this.tableDefinition = USERS_TABLE_DEFINITION;
    this.data$ = userListService.data$;
    this.isDataLoading$ = userListService.isDataLoading$;

    this.userListService.initialize();
  }
}