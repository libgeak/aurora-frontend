export const FORM_ERROR_MESSAGE = [
  {code: "minlength", message: (messageObject: any) => { return `Valor no cumple con el tamaño minimo, actual: ${messageObject.actualLength}, minimo: ${messageObject.requiredLength}`}},
  {code: "required" , message: (messageObject: any) => { return `El campo es obligatorio`}},
  {code: 'email', message: (messageObject: any) => {return `El formato de email es invalido`}},
  {code: 'maxlength', message: (messageObject: any) => {return `Valor excede el tamaño maximo permitido, actual: ${messageObject.actualLength}, maximo: ${messageObject.requiredLength} `} }



];
