/* import {Candidate} from './candidate'; */
import {PipeTransform, Pipe} from '@angular/core';
/* import { HEROES } from './mock.candidatees'; */

import { CandidService } from './candid.service';
import { Candidate } from './candidate';

@Pipe({
name : 'candidateFilter'

}
)
export class CandidateFilterPipe implements  PipeTransform {
transform(candidates: Candidate[], searchTerm: string): Candidate[] {
if ( !candidates || !searchTerm) {
return candidates;
}
return candidates.filter(candidate =>
    candidate.candidatename.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);



}


}
