/**
 * Created by caiguoqing on 2017/4/20.
 */


import {Directive ,ElementRef} from '@angular/core';

@Directive({
    selector:'[beautifulBackground]'
})
export class BeautifulBackgroundDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.backgroundColor = 'red';
        console.log(el)
       el.nativeElement.onclick = function () {
           el.nativeElement.style.backgroundColor == 'yellow'?el.nativeElement.style.backgroundColor = 'red':el.nativeElement.style.backgroundColor = 'yellow'
       }
    }
}