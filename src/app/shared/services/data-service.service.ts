import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  configUrs;
  storedResponse: StoredResponse = new StoredResponse();

  constructor(private http: HttpClient) {
    this.configUrs = environment;
  }

  getProjects(projectType) {
    this.storedResponse.projectList = this.http.get(this.configUrs.api.projectList);
    return this.storedResponse.projectList;
  }

  getTabsProjects(projectType) {
    const url = this.configUrs.api.tabsProjectList + projectType + '-project-list.json';
    this.storedResponse.projectList = this.http.get(url);
    return this.storedResponse.projectList;
  }

  getSearchResults(searchParameters) {
    const url = this.configUrs.api.search;
    return this.http.get(url);
  }

}

class StoredResponse {
  projectList;
}
