interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
}
interface Employee extends Person {
  employeeId: number;
  department: string;
}
const employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "123-456-7890",
  employeeId: 12345,
  department: "Sales",
};