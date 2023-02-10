import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map, Subject, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  // createAndStorePost(title: string, content: string) {
  //   const postData: Post = { title, content };
  //   return this.http.post<{ name: string }>(
  //     'https://udemy-angular-a1a93-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
  //     postData
  //   );
  // }
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://udemy-angular-a1a93-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://udemy-angular-a1a93-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Headers': 'Hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorResp) => {
          // Send to analytics server
          return throwError(() => new Error(errorResp.message));
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://udemy-angular-a1a93-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
