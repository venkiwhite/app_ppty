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

  getBannerWindowProjects(page) {
    return this.http.request(
      this.configUrs.api.bannerWindowProjectList.method,
      this.configUrs.api.bannerWindowProjectList.url + page + '.json'
    );
  }
}

class StoredResponse {
  bannerWindowProjectList = [];
}
