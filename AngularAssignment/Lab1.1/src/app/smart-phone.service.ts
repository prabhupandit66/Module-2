import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneService {
  mobileType:string="Smart Phone";
  public getType()
  {
    return "Smart Phone";
  }

  constructor() { }
}
