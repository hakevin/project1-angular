import { Component, OnInit } from '@angular/core';
import { Reimbursements } from '../models/reimbursements';
import { ReimbursementsService } from '../reimbursements.service';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {
  reimbursement: Reimbursements[];
  count = 0;
  constructor(private reimbursementService: ReimbursementsService) { }

  ngOnInit() {
    this.getAllReimb();
  }
  getAllReimb() {
  this.reimbursementService.getAllReimb().subscribe(user => this.reimbursement = user);
}
}

