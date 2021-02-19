import { Injectable } from "@angular/core";

import * as $ from 'jquery';


@Injectable()
export class TabUtil {

  nextTab(nameTab: String){
    $('#tabs li').removeClass('is-active');
    $('#tabs li[data-tab="' + nameTab + '"]').addClass('is-active');

    $('.tab-content div').removeClass('is-active');
    $('div.tab[data-content="' + nameTab + '"]').addClass('is-active');
  }

}
