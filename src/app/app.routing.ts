import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent} from './pages/course-list/course-list.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';
import {SectionsPageComponent} from './pages/sections-page/sections-page.component';

const appRoutes: Routes = [
  { path: 'home', component: CourseListComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/sections', component: SectionsPageComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
