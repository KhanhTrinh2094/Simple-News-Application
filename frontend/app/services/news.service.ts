import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News, HttpClient, Config } from 'raven.index';

@Injectable()
export class NewsService {

  private newsUrl = Config.ApiUrl + 'news';

  constructor(private http: HttpClient) { }

  getAllNews(): Promise<News[]> {
    return this.http.get(this.newsUrl)
      .toPromise()
      .then(response => response.json() as News[])
      .catch(this.handleError);
  }

  getNews(id: string): Promise<News> {
    const url = `${this.newsUrl}/${id}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as News)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.newsUrl}/${id}/`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(news: News): Promise<News> {
    return this.http
      .post(this.newsUrl + "/", news)
      .toPromise()
      .then(res => res.json() as News)
      .catch(this.handleError);
  }

  update(news: News): Promise<News> {
    const url = `${this.newsUrl}/${news._id}/`;
    return this.http
      .put(url, news)
      .toPromise()
      .then(() => news)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}