import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];
  httpposts: Post[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    // Fetch Users
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data.slice(0, 5);
    });

    // Fetch Posts
    this.httpClient.getPostsRemotely().subscribe((data) => {
      this.httpposts = data.slice(0, 5);
    });
  }
}
