import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import postList from './../posts';
import { MarkdownService } from 'ngx-markdown';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { Post } from '../Post';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Observable<any>;

  // 文章数组倒置，最新添加的文章靠前显示
  dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>(postList);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private markdownService: MarkdownService,
    private title: Title,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.title.setTitle('我的博客');
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.posts = this.dataSource.connect();

    this.markdownService.renderer.image = (
      href: string,
      title: string,
      text: string
    ) => {
      return `
      <center>
        <img src=${href} title=${text}></img>
      </center>
      `;
    };
  }
}
