/*
import { ExecFileOptionsWithStringEncoding } from "child_process"

export const ERROR_MESSAGES: Map<string, any> = new Map([
  ["required", "El campo es obligatorio"],
  ["minlength", (actuallength) => `Este careverga ${actuallength}`]
]
)minlength

export function minleng(a: any ){
  return `Este careverga ${a.actuallength}`
}

export interface IMessageError {
  code: string;

  getMessage(message: any): string;
}

class MessageError {
  _messageObject: any;
  _message: string;
  constructor(messageObject: any){
    this._messageObject = messageObject;
  }

  get message(): string {
    return
  }
}

class RequiredFormError extends MessageError {

    constructor(messajeObject: any){
      super(messajeObject)

    }
}

export class MessageErrorsFactory{

  getMessageError(code: string, detail: any){
    switch(code){
      case 'required':
    }
  }
}
*/

export const FORM_ERROR_MESSAGE = [
  {code: "minlength", message: (messageObject: any) => { return `Valor no cumple con el tamaño minimo, actual: ${messageObject.actualLength}, minimo: ${messageObject.requiredLength}`}},
  {code: "required" , message: (messageObject: any) => { return `El campo es obligatorio`}},
  {code: 'email', message: (messageObject: any) => {return `El formato de email es invalido`}},
  {code: 'maxlength', message: (messageObject: any) => {return `Valor excede el tamaño maximo permitido, actual: ${messageObject.actualLength}, maximo: ${messageObject.requiredLength} `} }



];
