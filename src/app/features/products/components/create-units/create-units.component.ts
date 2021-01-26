import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Unit } from 'src/app/core/models/Unit';
import { UnitService } from 'src/app/core/services/Unit.service';
import { NotificationsUtil } from 'src/app/core/utils/NotificationsUtil';

@Component({
  selector: 'app-create-units',
  templateUrl: './create-units.component.html',
  styleUrls: ['./create-units.component.css']
})
export class CreateUnitsComponent implements OnInit {
  formCreateUnit: FormGroup = {} as FormGroup ;
  unit: Unit  = {id: 0, state: 'A'} as Unit;

  constructor(private formBuilder: FormBuilder,
              private unitService: UnitService,
              private _Activatedroute:ActivatedRoute ) {
    this._buildForm()
    const id=this._Activatedroute.snapshot.paramMap.get("id");
    if(id){
      this.getUnit(+id);
    }
  }

  private _buildForm(){
    this.formCreateUnit = this.formBuilder.group({
      id: [this.unit.id],
      code:[this.unit.code, [Validators.required, Validators.minLength(2)]],
      name: [this.unit.name, Validators.required],
      state: [this.unit.state]
    })
  }

  ngOnInit(): void {

  }

  createUnit(){
    NotificationsUtil
    .showConfirm()
    .then(result => {
      if(result.isConfirmed){
        this.unitService
          .create(this.formCreateUnit.value)
          .subscribe(result => {
            NotificationsUtil.showComplete(result);
          }, err => {
            NotificationsUtil.showException(err);
          });
      }
    });
  }

  getUnit(id: number){
    this.unitService
      .get(id)
      .subscribe(unit => {
        this.unit = unit;
        this._buildForm();
    });
  }
}
