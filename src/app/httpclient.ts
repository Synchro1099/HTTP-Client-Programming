import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { User } from './user.model';
import { Post } from './post.model'; // Add this line

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private Post = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {}


 getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');
    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }

 getPostsRemotely(): Observable<Post[]> {
const cachedUsers = localStorage.getItem('post');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<Post[]>(this.Post).pipe(
  tap(posts => localStorage.setItem('post', JSON.stringify(posts)))
 );
}
}
