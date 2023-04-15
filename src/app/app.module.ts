import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component'
import { FormsModule } from '@angular/forms';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
