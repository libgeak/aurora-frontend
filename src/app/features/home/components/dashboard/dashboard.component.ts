import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  environmentIsProduction: string = "";

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router,
              private serviceSpinner: NgxSpinnerService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
    this.environmentIsProduction = environment.urlBackend;
    console.warn('Environment is PRODUCTION: ' + environment.production);
  }


  ngOnInit(): void {
    /*
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        this.serviceSpinner.show();
      } else if( event instanceof NavigationEnd){
        this.serviceSpinner.hide();
      }
    })
  }*/
  }

}
