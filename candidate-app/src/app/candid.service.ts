import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';
@Injectable({
  providedIn: 'root'
})
export class CandidService {

  
  candidateid=localStorage.getItem('candidateId');
  
  constructor(private http: HttpClient) {}

  url = 'http://localhost:5555/candidate';



  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.url}`);
  }

  addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${this.url}`, candidate);
  }
  
  deleteCandidate(id: number)
  {
    return this.http.delete<Candidate>(`${this.url}` + `/` + id);
  }

  updateCandidate(candidate: Candidate)
{
  return this.http.put(this.url + '/'+ this.candidateid, candidate);
}
editCandidate(id):Observable<Candidate> {
  return this
          .http 
          .get<Candidate>(`${this.url}/${id}`);
  }

  /* updateCandidate(candidatename, location, skill, id) {
    const obj = {
      candidatename,
      location,
      skill 

    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
} */

  }


