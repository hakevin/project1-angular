import { Component, OnInit } from '@angular/core';
import { Reimbursements } from '../models/reimbursements';
import { ReimbursementsService } from '../reimbursements.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reimbursement-by-user',
  templateUrl: './reimbursement-by-user.component.html',
  styleUrls: ['./reimbursement-by-user.component.css']
})
export class ReimbursementByUserComponent implements OnInit {

  reimbursement: Reimbursements[];
  count = 0;
  constructor(private reimbursementService: ReimbursementsService, private login: LoginService) { }

  ngOnInit() {
    this.getReimbursementList();
  }

  getReimbursementList() {
  this.reimbursementService.getAllReimb().subscribe(user => this.reimbursement = user);
}
}
