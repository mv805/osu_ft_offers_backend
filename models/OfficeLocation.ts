import db from "../db";

class OfficeLocation {
  static async getAll(): Promise<any> {
    const allLocations = await db.query("SELECT * FROM OfficeLocations");
    return allLocations[0];
  }

  /**
   * Retrieves all office locations' full names from the database. Order Alphabetically Descending
   * 
   * @returns A promise that resolves to an array of office locations' full names.
   */
  static async getAllFullNames(): Promise<any> {
    const allLocations = await db.query(`
    SELECT fullName FROM OfficeLocations
    ORDER BY fullName;`);
    return allLocations[0];
  }

  static async getByID(id: number): Promise<any> {
    const locationById = await db.query(
      `
      SELECT * FROM OfficeLocations 
      WHERE idOfficeLocation = ?
      `,
      [id]
    );
    return locationById[0];
  }

  static async getByShortCode(code: string): Promise<any> {
    const locationByShortCode = await db.query(
      `
      SELECT * FROM OfficeLocations
      WHERE location = ?
      `,
      [code]
    );
    return locationByShortCode[0];
  }

  static async getByFullName(fullName: string): Promise<any> {
    const locationByFullName = await db.query(
      `
      SELECT * FROM OfficeLocations
      WHERE fullName = ?
      `,
      [fullName]
    );
    return locationByFullName[0];
  }
}

export default OfficeLocation;
