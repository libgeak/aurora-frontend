import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { TabUtil } from './utils/TabUtil';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  },
  TabUtil
]
})
export class CoreModule { }
