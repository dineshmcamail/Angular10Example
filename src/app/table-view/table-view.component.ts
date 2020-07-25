import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  title = 'JSON to Table Example';

  products: any[] = [{
    "clcL_ID": "CL1000000000",
    "cdmL_SEQ_NO": "1",
    "cdmL_CHG_AMT": "100.0000",
    "cdmL_ALLOW": "50.0000",
    "cdoR_OR_AMT": "",
    "cdoR_OR_ID": "",
    "cdoR_EXCD_ID": ""
  }, {
    "clcL_ID": "CL1000000001",
    "cdmL_SEQ_NO": "1",
    "cdmL_CHG_AMT": "100.0000",
    "cdmL_ALLOW": "50.0000",
    "cdoR_OR_AMT": "",
    "cdoR_OR_ID": "",
    "cdoR_EXCD_ID": ""
  }, {
    "clcL_ID": "CL1000000002",
    "cdmL_SEQ_NO": "1",
    "cdmL_CHG_AMT": "100.0000",
    "cdmL_ALLOW": "50.0000",
    "cdoR_OR_AMT": "",
    "cdoR_OR_ID": "",
    "cdoR_EXCD_ID": ""
  }, {
    "clcL_ID": "CL1000000003",
    "cdmL_SEQ_NO": "1",
    "cdmL_CHG_AMT": "100.0000",
    "cdmL_ALLOW": "70.0000",
    "cdoR_OR_AMT": "70.0000",
    "cdoR_OR_ID": "AA",
    "cdoR_EXCD_ID": "002"
  }, {
    "clcL_ID": "CL1000000004",
    "cdmL_SEQ_NO": "1",
    "cdmL_CHG_AMT": "100.0000",
    "cdmL_ALLOW": "80.0000",
    "cdoR_OR_AMT": "80.0000",
    "cdoR_OR_ID": "AA",
    "cdoR_EXCD_ID": "002"
  }];


  constructor() { }

  ngOnInit () {

  }
}
