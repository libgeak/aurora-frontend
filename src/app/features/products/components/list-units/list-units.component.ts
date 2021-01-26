import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unit } from 'src/app/core/models/Unit';
import { UnitService } from 'src/app/core/services/Unit.service';

@Component({
  selector: 'app-list-units',
  templateUrl: './list-units.component.html',
  styleUrls: ['./list-units.component.css']
})
export class ListUnitsComponent implements OnInit {

  units: Observable<Unit[]>;

  constructor(private readonly unitService: UnitService ) {
    this.units =  this.unitService.list();
  }

  ngOnInit(): void {

  }

}
