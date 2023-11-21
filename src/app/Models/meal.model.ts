// meal.model.ts
export class Meal {
  constructor(
    public mealId: number,
    public name: string,
    public type: string,
    public mealImagePath: string,
    public calories: number,
    public protein: number,
    public diseaseId: number // Add the diseaseId property
  ) {}
}
