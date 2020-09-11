import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'link', component: LinkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post', redirectTo: '' },
  { path: 'post/:date/:path', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostComponent,
    HomeComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes, {
      // enableTracing: true,
    }),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
