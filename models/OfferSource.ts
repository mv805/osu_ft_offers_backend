import db from "../db";

class OfferSource {
  static async getAll(): Promise<any> {
    const allExperiences = await db.query(
      "SELECT * FROM OfferSources ORDER BY type;"
    );
    return allExperiences[0];
  }
}

export default OfferSource;
