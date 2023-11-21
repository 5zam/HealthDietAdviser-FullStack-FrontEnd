import { Injectable } from '@angular/core';
import { ChronicDisease } from '../Models/ChronicDisease.model';

@Injectable({
  providedIn: 'root'
})
export class ChronicDiseaseService {
  addChronicDisease(disease: ChronicDisease) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
