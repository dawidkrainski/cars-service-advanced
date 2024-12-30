import {Component, Input,SimpleChanges, ChangeDetectionStrategy, EventEmitter, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges{
  @Input() totalCost : number;
  @Output() shownGross : EventEmitter<number> = new EventEmitter<number>();
  private VAT : number = 1.23;
  costThreshold : number = 10000;
  isCostTooLow : boolean = false;

  showGross() : void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

  ngOnChanges(changes:SimpleChanges) {
    this.isCostTooLow = changes['totalCost'].currentValue < this.costThreshold;
  }


}
