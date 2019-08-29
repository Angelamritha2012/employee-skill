import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule,  Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { CandidService } from './candid.service';
import { CandidateFilterPipe } from './candidatefilter.pipe';
import { map } from 'rxjs/operators';
@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    ViewCandidateComponent,
    UpdateCandidateComponent,
    SearchCandidateComponent,
    CandidateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CandidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
