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

    //given values from the caller are put into an array.
    let valuesArray = Object.values(offerData);
    //if there is a given value for each of the fields, then a placeholder is needed "?", if there is no value given by the caller, then just DEFAULT values are needed. This is done and added to the placeholder array.
    let valuePlaceholders = fields
      .map((field, index) => (valuesArray[index] !== null ? "?" : "DEFAULT"))
      .join(", ");
    //another parameters array is created for each of the values given by the caller
    let valuesParameters = valuesArray.filter((value) => value !== null);

    //the sql is setup with the steps above, preparing the values and their placeholders
    const sql = `
    INSERT INTO Offers (${fields.join(", ")}) 
    VALUES (${valuePlaceholders})
  `;

    const result = await db.query(sql, valuesParameters);

    //return the pk id if its succesfully inserted.
    if (result[0] && "insertId" in result[0]) {
      return result[0].insertId;
    } else {
      throw new Error("Failed to insert the offer.");
    }
  }
}

export default Offer;
