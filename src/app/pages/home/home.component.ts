import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PresentationComponent } from '@components/home/presentation/presentation.component';
import { ToolsComponent } from '@components/home/tools/tools.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { RecentProjectsComponent } from '@components/home/recent-projects/recent-projects.component';
import { FooterComponent } from '../../components/home/footer/footer.component';
import { SocialNetworkService } from 'app/services/social-network.service';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {
  private socialNetWorkService = inject(SocialNetworkService);
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.socialNetWorkService.loadSocialNetworks();
    this.title.setTitle('Carlos López');
    this.meta.updateTag({
      name: 'description',
      content:
        'Software Engineer with expertise in full-stack development, creating innovative solutions using Angular, Java Spring Boot, Dart, and Flutter',
    });

    this.meta.updateTag({ name: 'og:title', content: 'Carlos López' });

    this.meta.updateTag({
      name: 'og:descrciption',
      content: 'Software Engineer with expertise in full-stack development, creating innovative solutions using Angular, Java Spring Boot, Dart, and Flutter',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://portfolioclopez.netlify.app/images/me/mecoffeanimation.webp`,
    });
  }
}
