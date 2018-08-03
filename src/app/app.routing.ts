import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent} from './pages/course-list/course-list.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: 'home', component: CourseListComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
