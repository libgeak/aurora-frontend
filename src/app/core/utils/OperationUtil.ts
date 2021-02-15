import { Injectable } from "@angular/core";

@Injectable()
export class OperationUtil{

  static isUndefined(value: any): boolean{
    return value === undefined;
  }
}
