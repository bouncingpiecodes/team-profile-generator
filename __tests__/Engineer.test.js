const Engineer = require("../lib/Engineer");

test("it creates a new engineer with the expected fields", () => {
  const engineer = new Engineer(
    "kara",
    "666",
    "kara@gmail.com",
    "bouncingpiecodes"
  );
  expect(engineer.getName()).toBe("kara");
  expect(engineer.getId()).toBe("666");
  expect(engineer.getEmail()).toBe("kara@gmail.com");
  expect(engineer.getGithub()).toBe("bouncingpiecodes");
});
