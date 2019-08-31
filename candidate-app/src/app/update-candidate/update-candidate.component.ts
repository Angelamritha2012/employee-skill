import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../candidate';
import { CandidService } from '../candid.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
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
    private http: HttpClient,
    private router: Router
  ) {
   this.createForm();
  }

  candidate: Candidate = {
    id: null,
    candidatename: null,
    location:   null,
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

onSubmit() {
  this.cs.updateCandidate(this.angForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['viewcandidate']);
      },
      error => {
        alert(error);
      });
}

  ngOnInit() {
    let candidateId = localStorage.getItem("candidateId");
    if(!candidateId) {
      alert("Invalid action.")
      this.router.navigate(['viewcandidate']);
      return;
    }
    console.log(candidateId);
    this.createForm();
    this.cs.editCandidate(candidateId)
      .subscribe( data => {
        this.angForm.patchValue(data);
      });
  } 
  

}/*
ngOnInit() 
  {
    this.getAll();
  }
  getAll(): void {
    const candidateId = +this.router.navigate.bind.
    public get value() : string {
      return 
    }
    ('candidateId');
    this.serve.getid(employeeid)
    .subscribe(skills => this.skills = skills);
  }


  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.skillsserve.update(this.skills)
      .subscribe(() => this.goBack());
  }


}
*/