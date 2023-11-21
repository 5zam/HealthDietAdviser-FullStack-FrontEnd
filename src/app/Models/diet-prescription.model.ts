// diet-prescription.model.ts
export class DietPrescription {
    constructor(
      public id: number,
      public startDate: string,
      public endDate: string,
      public active: boolean,
      public userId: number,
      public diseaseId: number,
      public mealIds: number[] // Add an array of mealIds
    ) {}
  }
  