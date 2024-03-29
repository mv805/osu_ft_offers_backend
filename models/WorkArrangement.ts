import db from "../db";

class WorkArrangement {
  static async getAll(): Promise<any> {
    const allWorkArrangements = await db.query(
      "SELECT * FROM WorkArrangements ORDER BY arrangement;"
    );
    return allWorkArrangements[0];
  }
}

export default WorkArrangement;
