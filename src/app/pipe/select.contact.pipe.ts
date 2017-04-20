/**
 * Created by caiguoqing on 2017/4/18.
 */

import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'selectCantact',pure:false})
export class SelectContact implements PipeTransform{
    transform(allContacts: Array<any>,prefix:string){
        return allContacts.filter(contact => contact.name.match("^" + prefix))
    }
}