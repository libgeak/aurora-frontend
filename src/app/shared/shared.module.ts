import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageValidatorComponent } from './components/message-validator/message-validator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ MessageValidatorComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MessageValidatorComponent,
    SpinnerComponent
   ]
})
export class SharedModule { }
