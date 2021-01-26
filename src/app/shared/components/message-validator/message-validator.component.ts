import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FORM_ERROR_MESSAGE } from 'src/app/core/constants/MessageErrors';


@Component({
  selector: 'app-message-validator',
  templateUrl: './message-validator.component.html',
  styleUrls: ['./message-validator.component.css']
})
export class MessageValidatorComponent implements OnInit {

  @Input() formGroup: FormGroup = {} as FormGroup;
  @Input() controlName: string = '';
  @Output() errorCode = new EventEmitter<String>();

  readonly ERROR: string = 'help is-danger'
  constructor() { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

  hasError(): boolean {
    const controlForm = this.formControl;

    const hasError = controlForm.touched && (controlForm.pristine || controlForm.dirty) && controlForm.invalid;
/*
    if(hasError) {
      this.errorCode.emit(this.ERROR);
    }
    */
    return hasError;
  }

  getMessageError(): string{
    const controlForm = this.formControl;
    const entryErrors  = controlForm.errors? Object.entries(controlForm.errors) : null;
    if(!entryErrors){
      return "";
    }
    console.log(entryErrors);
    for (var [key, value] of entryErrors) {
      const error = FORM_ERROR_MESSAGE.find(msg => msg.code === key);
      if(error){
        return error?.message(value);
      }
    }

    return "";
  }
}
