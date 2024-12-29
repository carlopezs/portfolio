import {
  Component,
  computed,
  linkedSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Tools } from '@models/tools.model';
import { ProjectComponent } from '../../components/general/project/project.component';
import { Project } from '@models/project.model';
import { Job } from '@models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    ProjectComponent,
    ProjectComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public tools: WritableSignal<Tools[]> = signal([
    { title: 'JavaScript', image: 'images/javascript.png' },
    { title: 'HTML', image: 'images/html.png' },
    { title: 'CSS', image: 'images/css.png' },
    { title: 'Angular', image: 'images/angular.png' },
    { title: 'TailWind', image: 'images/tailwind.png' },
    { title: 'Material', image: 'images/material.png' },
    { title: 'Flutter', image: 'images/flutter.png' },
    { title: 'MongoDB', image: 'images/mongodb.png' },
    { title: 'Java', image: 'images/java.png' },
    { title: 'Spring', image: 'images/spring.png' },
    { title: 'Oracle', image: 'images/oracle.png' },
    { title: 'Firebase', image: 'images/firebase.png' },
  ]);

  public projects: WritableSignal<Project[]> = signal([
    {
      title: 'Te Ayudo App',
      image: 'images/delete.png',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit`,
    },
    {
      title: 'Cota City',
      image: 'images/delete.png',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit`,
    },
    {
      title: 'Multi Quiz',
      image: 'images/delete.png',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit`,
    },
    {
      title: 'My Portfolio',
      image: 'images/delete.png',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
        accusamus omnis eum suscipit`,
    },
  ]);

  public jobs: WritableSignal<Job[]> = signal([
    {
      title: 'Frontend Developer',
      description:
        'Responsible for developing and maintaining user-facing web applications.',
      initDate: new Date('2023-01-15'),
      endDate: new Date('2023-12-31'),
    },
    {
      title: 'Backend Developer',
      description: 'Designed and implemented RESTful APIs and microservices.',
      initDate: new Date('2022-05-01'),
      endDate: new Date('2023-04-30'),
    },
    {
      title: 'UI/UX Designer',
      description:
        'Created wireframes, prototypes, and high-fidelity designs for mobile and web applications.',
      initDate: new Date('2021-03-01'),
      endDate: new Date('2022-02-28'),
    },
    {
      title: 'Project Manager',
      description:
        'Oversaw project planning, resource allocation, and ensured timely delivery.',
      initDate: new Date('2020-09-01'),
      endDate: new Date('2021-08-31'),
    },
    {
      title: 'QA Analyst',
      description:
        'Performed manual and automated testing to ensure software quality.',
      initDate: new Date('2019-06-15'),
      endDate: new Date('2020-05-31'),
    },
  ]);

  private actualIndexJob: WritableSignal<number> = signal(0);

  public actualJob = computed(() => this.jobs()[this.actualIndexJob()]);

  public isLastIndex = computed( () =>  this.actualIndexJob() === this.jobs().length - 1);

  public isFirstIndex = computed( () =>  this.actualIndexJob() === 0);

  public nextJob() {
    if (this.actualIndexJob() === this.jobs().length - 1) return;

    this.actualIndexJob.update((index) => index + 1);
  }

  public previousJob() {
    if (this.actualIndexJob() === 0) return;

    this.actualIndexJob.update((index) => index - 1);
  }
}
