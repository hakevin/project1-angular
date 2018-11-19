import { Component, OnInit } from '@angular/core';
import { ReimbursementsService } from '../reimbursements.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  choice: any;

  constructor(private reimb: ReimbursementsService, private login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit(id, amount, type, desc) {
    const reimb = {
      author: id,
      amount: amount,
      typeID: type,
      description: desc
    };

    this.reimb.createReimb(reimb).subscribe(x => { });
  }

}
