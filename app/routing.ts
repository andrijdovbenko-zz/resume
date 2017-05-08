import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';


const APP_ROUTES: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacts', component: ContactsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
