import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reimbursements } from './models/reimbursements';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementsService {

  reimbursement: Reimbursements[];
  constructor(private http: HttpClient) { }
  getAllReimb() {
    return this.http.get<Reimbursements[]>('http://localhost:8080/project1/manager');
  }

  getReimbursementList() {
    return this.http.get<Reimbursements[]>('http://localhost:8080/project1/reimbursement');
  }

  createReimb(reimb) {
    return this.http.post<Reimbursements>('http://localhost:8080/project1/reimbursement', reimb);
  }

  approve(Id) {
    const reimb = {
      id: Id
    };
    return this.http.put<Reimbursements>('http://localhost:8080/project1/approve', reimb);
  }

  deny(Id) {
    const reimb = {
      id: Id
    };
    return this.http.put<Reimbursements>('http://localhost:8080/project1/deny', reimb);
  }
}
