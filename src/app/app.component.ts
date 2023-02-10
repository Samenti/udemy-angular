import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  error = null;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService
      .createAndStorePost(postData.title, postData.content)
      .subscribe(() => {
        this.fetchPosts();
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.isFetching = true;
    // ** below signature for subscribe() callbacks is deprecated
    // this.postsService.fetchPosts().subscribe(
    //   (posts) => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   },
    //   (error) => {
    //     this.error = error.message;
    //   }
    // );
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.error = error.message;
        console.log(error);
      },
    });
  }
}
