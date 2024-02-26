import db from "../db";

class PriorExperience {
  static async getAll(): Promise<any> {
    const allExperiences = await db.query("SELECT * FROM PriorExperiences ORDER BY experienceType");
    return allExperiences[0];
  }

  static async getByID(id: number): Promise<any> {
    const experienceById = await db.query(
      "SELECT * FROM PriorExperiences WHERE idPriorExperience = ?",
      [id]
    );
    return experienceById[0];
  }

  static async getByType(type: string): Promise<any> {
    const experienceByType = await db.query(
      "SELECT * FROM PriorExperiences WHERE experienceType = ?",
      [type]
    );
    return experienceByType[0];
  }
}

export default PriorExperience;
