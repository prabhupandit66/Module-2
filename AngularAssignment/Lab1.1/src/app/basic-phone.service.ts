import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicPhoneService {
  mobileType:string="Basic Phone";

  public getType()
  {
    return "Basic Phone";
  }
  constructor() { }
}
