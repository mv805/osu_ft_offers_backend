import db from "../db";

class PreviousDegree {
  static async getAll(): Promise<any> {
    const allPreviousDegrees = await db.query(
      "SELECT * FROM PreviousDegrees ORDER BY degreeType;"
    );
    return allPreviousDegrees[0];
  }

  static async getByType(degreeType: string): Promise<any> {
    const degreeByType = await db.query(
      `
      SELECT * FROM PreviousDegrees 
      WHERE degreeType = ?
      `,
      [degreeType]
    );
    return degreeByType[0];
  }

  static async getByID(id: number): Promise<any> {
    const degreeById = await db.query(
      `
      SELECT * FROM PreviousDegrees 
      WHERE idPreviousDegree = ?
      `,
      [id]
    );
    return degreeById[0];
  }
}

export default PreviousDegree;
