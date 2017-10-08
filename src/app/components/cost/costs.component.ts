import { Component, OnInit } from '@angular/core';

import { CostService } from './cost.service';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {

  constructor(private costService: CostService) { }

  ngOnInit() {
  }

}
