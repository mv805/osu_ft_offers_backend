import db from "../db";

class User {
  static async getAll(): Promise<any> {
    const result = await db.query("SELECT * FROM users");
    return result[0];
  }

  // Other model methods (create, update, delete) go here
}

export default User;
