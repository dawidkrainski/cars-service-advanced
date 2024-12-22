import { Component, OnInit } from '@angular/core';
import {CostSharedService} from "../../cost-shared.service";

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html',
})
export class IncomeTaxComponent implements OnInit {
 private incomeTax: number = 18;
  income: number;

  constructor(
    private costSharedService : CostSharedService,
  ) { }

  ngOnInit() {
    this.costSharedService.totalCostSource$.subscribe((cost) => {
      this.income = cost * this.incomeTax / 100;
    });
  }

}
