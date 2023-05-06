import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HeaderComponent } from './components/header/header.component';
import { AddExperienceComponent } from './components/modals/add-experience/add-experience.component';
import { AddEducationComponent } from './components/modals/add-education/add-education.component';
import { AddSkillsComponent } from './components/modals/add-skills/add-skills.component';
import { AddProyectsComponent } from './components/modals/add-proyects/add-proyects.component';
import { HomeComponent } from './pages/home/home.component';
import { EditPerfilComponent } from './pages/edit-perfil/edit-perfil.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component'
import { FormsModule } from '@angular/forms';
import { EditEducationComponent } from './components/modals/edit-education/edit-education.component';
import { DeleteEducationComponent } from './components/modals/delete-education/delete-education.component';
import { DeleteExperienceComponent } from './components/modals/delete-experience/delete-experience.component';
import { EditExperienceComponent } from './components/modals/edit-experience/edit-experience.component';
import { DeleteProyectsComponent } from './components/modals/delete-proyects/delete-proyects.component';
import { EditProyectsComponent } from './components/modals/edit-proyects/edit-proyects.component';
import { DeleteSkillsComponent } from './components/modals/delete-skills/delete-skills.component';
import { EditSkillsComponent } from './components/modals/edit-skills/edit-skills.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    HeaderComponent,
    AddExperienceComponent,
    AddEducationComponent,
    AddSkillsComponent,
    AddProyectsComponent,
    HomeComponent,
    EditPerfilComponent,
    FooterComponent,
    EditEducationComponent,
    DeleteEducationComponent,
    DeleteExperienceComponent,
    EditExperienceComponent,
    DeleteProyectsComponent,
    EditProyectsComponent,
    DeleteSkillsComponent,
    EditSkillsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
