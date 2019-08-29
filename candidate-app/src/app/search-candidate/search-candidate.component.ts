import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidService } from '../candid.service';
@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {


  searchTerm: string;
  candidates: Candidate[];

  constructor(
    private candidateService: CandidService,
  ) {}

  getCandidate() {
    this.candidateService
      .getCandidates()
      .subscribe((candidates: Candidate[]) => {
        this.candidates = candidates;
      });
  }

  ngOnInit() {
    this.getCandidate();
  }

}

