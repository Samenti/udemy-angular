import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  error = null;
  errorSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.fetchPosts();
  }

  // onCreatePost(postData: Post) {
  //   this.postsService
  //     .createAndStorePost(postData.title, postData.content)
  //     .subscribe(() => {
  //       this.fetchPosts();
  //     });
  // }
  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
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

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
