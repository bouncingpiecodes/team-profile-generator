const Employee = require("../lib/Employee");

test("it creates a new employee with the expected fields", () => {
  const employee = new Employee("kara", "666", "kara@gmail.com");
  expect(employee.getName()).toBe("kara");
  expect(employee.getId()).toBe("666");
  expect(employee.getEmail()).toBe("kara@gmail.com");
});
