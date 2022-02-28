const db = require("../db/db");

class personDAO {
  async createperson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return id;
  }
}
