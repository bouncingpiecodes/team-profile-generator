const Intern = require("../lib/Intern");

test("it creates a new intern with the expected fields", () => {
  const intern = new Intern("kara", "666", "kara@gmail.com", "GT");
  expect(intern.getName()).toBe("kara");
  expect(intern.getId()).toBe("666");
  expect(intern.getEmail()).toBe("kara@gmail.com");
  expect(intern.getSchool()).toBe("GT");
});
