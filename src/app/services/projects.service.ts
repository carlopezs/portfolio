import { computed, Injectable, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';

import { Project } from '@models/project.model';
import { projects as dataProjects } from '@data/projects';
@Injectable({ providedIn: 'root' })
export class ProjectsService {

  private _projects: WritableSignal<Project[]> = signal([]);
  private _projectToShow: WritableSignal<Project> = linkedSignal(()=> this._projects()[0])

  public projects: Signal<Project[]> = computed(()=> this._projects())
  public projectToShow:Signal<Project> = computed(()=> this._projectToShow());


  constructor() {}

  public async loadProjects() {

      this._projects.set([...dataProjects]);

  }

  public chooseProjectToShow(projectId:number){
    const projectToShow = this._projects().find((project)=> project.id === projectId);
    if (!projectToShow) return;
    this._projectToShow.set(projectToShow)
  }

  public chooseProjectToShowByTitle(title:string){
    const projectToShow = this._projects().find((project)=> project.title == title);
    if (!projectToShow) return;
    this._projectToShow.set(projectToShow)
  }
}
