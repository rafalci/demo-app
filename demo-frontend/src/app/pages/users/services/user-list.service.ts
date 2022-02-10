import { Injectable } from "@angular/core";
import { ClientDataService } from '@lib/demo-core';
import { UsersService, UserDto } from '@lib/proxy';

@Injectable()
export class UserListService extends ClientDataService<UserDto> {
  constructor(readonly usersService: UsersService) {
    super({
      getAll: () => usersService.getUsers()
    });
  }
}
