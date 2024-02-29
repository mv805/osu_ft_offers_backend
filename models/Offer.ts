import db from "../db";
import { RowDataPacket } from "mysql2";

interface SalaryRecord {
  salary: number;
}

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

  static async getAllSalaries(max?: number) {
    let sql = "SELECT salary FROM Offers";
    let params: number[] = [];

    if (max !== undefined) {
      sql += " WHERE salary < ?";
      params.push(max);
    }

    const result = await db.query(sql, params);
    const salaries = (result[0] as RowDataPacket[]).map(
      (record: any) => record.salary
    );

    return salaries;
  }

  static async getSalariesByState(state: string, max?: number) {
    let sql = "SELECT salary FROM Offers ";
    let params: (number | string)[] = [];

    if (max !== undefined) {
      sql += "WHERE salary < ? AND ";
      params.push(max);
    } else {
      sql += "WHERE ";
    }

    sql += `
    idOfficeLocation = (SELECT idOfficeLocation FROM officeLocations WHERE location = ?)`;
    params.push(state);

    const result = await db.query(sql, params);
    const salaries = (result[0] as RowDataPacket[]).map(
      (record: any) => record.salary
    );

    return salaries;
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

  static async getSalaryGroups(): Promise<any> {
    const salaryGroups = await db.query(`
    SELECT 
      salary_ranges.salary_range,
      COUNT(subquery.salary) AS count
    FROM 
      (
        SELECT '20k to 40k' AS salary_range
        UNION SELECT '40k to 60k'
        UNION SELECT '60k to 80k'
        UNION SELECT '80k to 100k'
        UNION SELECT '100k to 120k'
        UNION SELECT '120k to 140k'
        UNION SELECT '140k to 160k'
        UNION SELECT '160k to 180k'
        UNION SELECT '180k to 200k'
        UNION SELECT '200k+'
      ) AS salary_ranges
    LEFT JOIN 
      (SELECT salary FROM offers) AS subquery 
    ON 
      CASE 
        WHEN subquery.salary >= 20000 AND subquery.salary < 40000 THEN '20k to 40k'
        WHEN subquery.salary >= 40000 AND subquery.salary < 60000 THEN '40k to 60k'
        WHEN subquery.salary >= 60000 AND subquery.salary < 80000 THEN '60k to 80k'
        WHEN subquery.salary >= 80000 AND subquery.salary < 100000 THEN '80k to 100k'
        WHEN subquery.salary >= 100000 AND subquery.salary < 120000 THEN '100k to 120k'
        WHEN subquery.salary >= 120000 AND subquery.salary < 140000 THEN '120k to 140k'
        WHEN subquery.salary >= 140000 AND subquery.salary < 160000 THEN '140k to 160k'
        WHEN subquery.salary >= 160000 AND subquery.salary < 180000 THEN '160k to 180k'
        WHEN subquery.salary >= 180000 AND subquery.salary < 200000 THEN '180k to 200k'
        ELSE '200k+'
      END = salary_ranges.salary_range
    GROUP BY 
      salary_ranges.salary_range
    ORDER BY
      CASE 
        WHEN salary_ranges.salary_range = '20k to 40k' THEN 1
        WHEN salary_ranges.salary_range = '40k to 60k' THEN 2
        WHEN salary_ranges.salary_range = '60k to 80k' THEN 3
        WHEN salary_ranges.salary_range = '80k to 100k' THEN 4
        WHEN salary_ranges.salary_range = '100k to 120k' THEN 5
        WHEN salary_ranges.salary_range = '120k to 140k' THEN 6
        WHEN salary_ranges.salary_range = '140k to 160k' THEN 7
        WHEN salary_ranges.salary_range = '160k to 180k' THEN 8
        WHEN salary_ranges.salary_range = '180k to 200k' THEN 9
        ELSE 10
      END;
    `);

    return salaryGroups[0];
  }
}

export default Offer;
