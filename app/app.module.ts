import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './routing';
import { WorkListComponent } from './portfolio/work-list/work-list.component';
import { WorkDetailComponent } from './portfolio/work-detail/work-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactsComponent,
    HeaderComponent,
    WorkListComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
