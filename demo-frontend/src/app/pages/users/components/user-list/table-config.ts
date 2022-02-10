import { TableDefinition, ColumnType } from '@lib/demo-core';
import { UserDto } from '@lib/proxy';

export const USERS_TABLE_DEFINITION: TableDefinition<UserDto, number> = {
  columns: [
    {
      name: 'id',
      label: 'Id',
      columnType: ColumnType.NUMBER
    },
    {
      name: 'firstName',
      label: 'First name',
      columnType: ColumnType.PLAIN_TEXT
    },
    {
      name: 'lastName',
      label: 'Last name',
      columnType: ColumnType.PLAIN_TEXT
    },
    {
      name: 'age',
      label: 'Age',
      columnType: ColumnType.NUMBER
    },
    {
      name: 'active',
      label: 'Is active',
      columnType: ColumnType.BOOLEAN
    },
  ],
  selector: (row: UserDto) => row.id
};
