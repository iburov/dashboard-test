export type EmployeeGroup = 'admin' | 'doctor' | 'nurse';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  group: EmployeeGroup;
}

export interface EmployeeListItem {
  name: string;
  group: EmployeeGroup;
}
