import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  shouldBeShown: boolean = true;
  socialPosts: string[] = [];
 


  constructor() { }

addPost(newPost) {
  this.socialPosts.unshift(newPost);
  console.log(this.socialPosts);
}

removePost(index: number): void {
  this.socialPosts.splice(index, 1);
}

toggleDisplay(): void {
  this.shouldBeShown = !this.shouldBeShown;
}

  ngOnInit() {
  }

}
