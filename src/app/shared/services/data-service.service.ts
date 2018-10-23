import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  configUrs;
  constructor(private http: HttpClient) {
    this.configUrs = environment;
  }

  getProjects(projectType) {
    return this.http.get(this.configUrs.api.projectList);
  }
}
