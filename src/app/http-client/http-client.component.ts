import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { Post } from '../post';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  posts: Post;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.showPosts();
  }

  showPosts() {
    this.httpClientService.getPosts()
      .subscribe(resp => {
        this.posts = resp.body;
      });
  }
}

