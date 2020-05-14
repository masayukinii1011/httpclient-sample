import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<HttpResponse<Post>> {
    return this.http.get<Post>(
      this.url, { observe: 'response' });
  }
}
