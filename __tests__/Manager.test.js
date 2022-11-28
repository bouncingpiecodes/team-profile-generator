const Manager = require("../lib/Manager");

test("it creates a new manager with the expected fields", () => {
  const manager = new Manager("kara", "666", "kara@gmail.com", "369");
  expect(manager.getName()).toBe("kara");
  expect(manager.getId()).toBe("666");
  expect(manager.getEmail()).toBe("kara@gmail.com");
  expect(manager.getOfficeNumber()).toBe("369");
});
