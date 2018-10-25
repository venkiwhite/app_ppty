import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerServiceService {

  configUrs;
  storedResponse: StoredResponse = new StoredResponse();

  constructor(private http: HttpClient) {
    this.configUrs = environment;
  }

  getBannerWindowProjects() {
    this.storedResponse.bannerWindowProjectList = this.http.get(this.configUrs.api.bannerWindowProjectList);
    return this.storedResponse.bannerWindowProjectList;
  }
}

class StoredResponse {
  bannerWindowProjectList;
}
