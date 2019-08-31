import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CandidService } from '../candid.service';
import { Candidate } from '../candidate';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {
  candidates: Candidate[];
  isDeleted: boolean=false;
  confirmString: string= "candidate deleted";
  selectedCandidate: Candidate = { id: null, candidatename: null, location: null, skill: null };
  constructor(
    private cs: CandidService,
    private router: Router
  ) { }

  getCandidate() {
    this.cs
      .getCandidates()
      .subscribe((candidates: Candidate[]) => {
        this.candidates = candidates;
      });
  }
  ngOnInit() {
    this.getCandidate();
    /* this.selectCandidate($`{this.id}`); */
  }

  deleteCandidate(id) {
    this.cs
      .deleteCandidate(id)
      .subscribe((candidate: Candidate) => {
        this.isDeleted = true;
        this.getCandidate();
        console.log('Candidate deleted, ', candidate);
      });
   /*  this.getCandidate(); */
  }

  selectCandidate(id) {
    /* this.selectedCandidate=candidate; */
    
      localStorage.removeItem("candidateId");
      localStorage.setItem("candidateId",id.toString());
      this.router.navigate(['updateCandidate']);
    };
    /* this.cs.editCandidate(id).subscribe((candidates: Candidate[]) => {
        this.candidates = candidates;
      this.router.navigate(['updateCandidate']);

      }); */
    /* this.cs.editCandidate(id).subscribe((candidate: Candidate) => {
      console.log('candidate updated', candidate);
      this.router.navigate(['updateCandidate']);
    }); */
  }


