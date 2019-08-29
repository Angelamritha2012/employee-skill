import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../candidate';
import { CandidService } from '../candid.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
  public candidates = [];
  confirmString: false;
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cs: CandidService,
    private http: HttpClient
  ) {
    this.createForm();
  }

  candidate: Candidate = {
    id: null,
    candidatename: null,
    location: null,
    skill: null
  };
  createForm() {
    this.angForm = this.fb.group({
      candidatename: ['', Validators.required],
      location: ['', Validators.required],
     skill: ['', Validators.required]
    });
  }
updateCandidate(form) {
  this.cs.updateCandidate(form.value).subscribe((candidate: Candidate) => {
    console.log('Candidate updated ', candidate);
  });
}

  ngOnInit() {} 
  

  }
