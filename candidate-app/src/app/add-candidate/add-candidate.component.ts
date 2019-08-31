import { Component, OnInit } from '@angular/core';
import { CandidService } from '../candid.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Candidate } from '../candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  public candidates = [];
  isAdded: boolean=false;
  confirmString: string= "candidate added";
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
addCandidate(form) {
  this.cs.addCandidate(form.value).subscribe((candidate: Candidate) => {
  this.isAdded=true;
    console.log('Candidate created, ', candidate);
    this.angForm.reset();
  });
}

  ngOnInit() {}
}
