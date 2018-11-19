import { Component, OnInit, DoCheck } from '@angular/core';
import { ReimbursementsService } from '../reimbursements.service';
import { Reimbursements } from '../models/reimbursements';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reimbursement',
  templateUrl: './employee-reimbursement.component.html',
  styleUrls: ['./employee-reimbursement.component.css']
})
export class EmployeeReimbursementComponent implements OnInit {
  reimbursement: Reimbursements[];
  count = 0;
  constructor(private reimbursementService: ReimbursementsService, private router: Router) { }

  ngOnInit() {
    // setInterval(() => this.getAllReimb(), 5000);
    this.getAllReimb();
  }

  getAllReimb() {
  this.reimbursementService.getAllReimb().subscribe(user => this.reimbursement = user);
}
approve(id) {
  this.reimbursementService.approve(id).subscribe(x => {});
  this.getAllReimb();
  }

  deny(id) {
  this.reimbursementService.deny(id).subscribe(x => {});
  this.getAllReimb();
  }
}
