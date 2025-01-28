import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PresentationComponent } from '@components/home/presentation/presentation.component';
import { ToolsComponent } from '@components/home/tools/tools.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { RecentProjectsComponent } from '@components/home/recent-projects/recent-projects.component';
import { FooterComponent } from '../../components/home/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    PresentationComponent,
    ToolsComponent,
    CommonModule,
    ExperienceComponent,
    RecentProjectsComponent,
    FooterComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
