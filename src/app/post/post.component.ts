import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import postList from '../posts';
import { Post } from '../Post';
import { MarkdownService } from 'ngx-markdown';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private markdownService: MarkdownService,
    private title: Title
  ) {}

  ngOnInit(): void {
    // 获取路由参数
    postList.forEach((post) => {
      let name = this.activatedRoute.snapshot.params['path'];
      if (post.name == name) {
        this.post = post;
      }
    });

    this.title.setTitle(this.post.title + ' - 我的博客');

    this.markdownService.renderer.image = (
      href: string,
      title: string,
      text: string
    ) => {
      console.log(href, title, text);
      return `
      <center>
        <img src=${href} title=${text}></img>
      </center>
      `;
    };
  }
}
