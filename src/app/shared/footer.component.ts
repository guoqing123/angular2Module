import {Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'my-footer',
  templateUrl: 'app/shared/footer.component.html',
  styleUrls: ['app/shared/footer.component.css']
})
export class FooterComponent implements OnInit {
  private isListPage:boolean = true;
  @Input() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private _location:Location
  ) {}

  increment(){
    this.value++;
    this.valueChange.emit(this.value)
  }

  ngOnInit() {
    this.isListPage = this._location.path() == '' || this._location.path().indexOf('/list') > -1 
  }
}
