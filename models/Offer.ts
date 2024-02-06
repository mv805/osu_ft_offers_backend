import db from "../db";

class Offer {
  static async getAll(): Promise<any> {
    const offers = await db.query(`
    SELECT 
    Offers.idOffer,
    Offers.userName,
    Offers.offerDate,
    IFNULL(CASE WHEN Offers.personalProject = 1 THEN 'Yes' ELSE 'No' END, 'N/A') AS personalProject,
    IFNULL(CASE WHEN Offers.returnship = 1 THEN 'Yes' ELSE 'No' END, 'N/A') AS returnship,
    Offers.timeInProgram,
    Offers.salary,
    Offers.gpa,
    IFNULL(CASE WHEN Offers.swePosition = 1 THEN 'Yes' ELSE 'No' END, 'N/A') AS swePosition,
    IFNULL(CASE WHEN Offers.bigTechOffer = 1 THEN 'Yes' ELSE 'No' END, 'N/A') AS bigTechOffer,
    Offers.ageOfCandidate,
    IFNULL(OfferSources.type, 'N/A') AS offerSourceType,
    IFNULL(OfficeLocations.location, 'N/A') AS officeLocation,
    IFNULL(WorkArrangements.arrangement, 'N/A') AS workArrangement,
    IFNULL(PriorExperiences.experienceType, 'N/A') AS priorExperienceType,
    IFNULL(PreviousDegrees.degreeType, 'N/A') AS previousDegreeType
    FROM 
        Offers
    LEFT JOIN 
        OfferSources ON Offers.idOfferSource = OfferSources.idOfferSource
    LEFT JOIN 
        OfficeLocations ON Offers.idOfficeLocation = OfficeLocations.idOfficeLocation
    LEFT JOIN 
        WorkArrangements ON Offers.idWorkArrangement = WorkArrangements.idWorkArrangement
    LEFT JOIN 
        PriorExperiences ON Offers.idPriorExperience = PriorExperiences.idPriorExperience
    LEFT JOIN 
        PreviousDegrees ON Offers.idPreviousDegree = PreviousDegrees.idPreviousDegree;
    `);
    return offers[0];
  }

  static async create(offerData: {
    userName: string | null;
    offerDate: string;
    personalProject: number;
    returnship: number;
    timeInProgram: number | null;
    salary: number | null;
    gpa: number | null;
    swePosition: number;
    bigTechOffer: number;
    ageOfCandidate: number | null;
    idOfferSource: number | null;
    idOfficeLocation: number | null;
    idWorkArrangement: number | null;
    idPriorExperience: number | null;
    idPreviousDegree: number | null;
  }): Promise<any> {
    let fields = [
      "userName",
      "offerDate",
      "personalProject",
      "returnship",
      "timeInProgram",
      "salary",
      "gpa",
      "swePosition",
      "bigTechOffer",
      "ageOfCandidate",
      "idOfferSource",
      "idOfficeLocation",
      "idWorkArrangement",
      "idPriorExperience",
      "idPreviousDegree",
    ];

    let valuesArray = Object.values(offerData);
    let valuePlaceholders = fields
      .map((field, index) => (valuesArray[index] !== null ? "?" : "DEFAULT"))
      .join(", ");
    let valuesParameters = valuesArray.filter((value) => value !== null);

    const sql = `
    INSERT INTO Offers (${fields.join(", ")}) 
    VALUES (${valuePlaceholders})
  `;

    await db.query(sql, valuesParameters);
  }
}

export default Offer;
