import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { UserDto } from '../model/model';

const USERS: UserDto[] = [
  {
    id: 1,
    firstName: 'Bartek',
    lastName: 'Kowalski',
    age: 21,
    active: false
  },
  {
    id: 2,
    firstName: 'Mikołaj',
    lastName: 'Kowalski',
    age: 4,
    active: true
  },
  {
    id: 3,
    firstName: 'Daniel',
    lastName: 'Kowalski',
    age: 10,
    active: true
  },
  {
    id: 4,
    firstName: 'Hubert',
    lastName: 'Kowalski',
    age: 3,
    active: false
  },
  {
    id: 5,
    firstName: 'Jacek',
    lastName: 'Kowalski',
    age: 4,
    active: true
  },
  {
    id: 6,
    firstName: 'Jan',
    lastName: 'Nowak',
    age: 20,
    active: true
  },
  {
    id: 7,
    firstName: 'Bartek',
    lastName: 'Nowak',
    age: 21,
    active: false
  },
  {
    id: 8,
    firstName: 'Mikołaj',
    lastName: 'Nowak',
    age: 4,
    active: true
  },
  {
    id: 9,
    firstName: 'Daniel',
    lastName: 'Nowak',
    age: 10,
    active: true
  },
  {
    id: 10,
    firstName: 'Hubert',
    lastName: 'Nowak',
    age: 3,
    active: false
  },
  {
    id: 11,
    firstName: 'Jacek',
    lastName: 'Nowak',
    age: 4,
    active: true
  }
]

@Injectable()
export class UsersService {
  public getUsers(): Observable<UserDto[]> {
    return of(USERS);
  }
}
