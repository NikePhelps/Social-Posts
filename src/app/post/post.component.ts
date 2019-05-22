import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from "../social-posts/posts"


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() social: Posts;
  @Output() onRemovePost = new EventEmitter<any>();
  
  
  
  constructor() { }

  removePost(index: number): void {
    this.onRemovePost.emit(index);
  }

}
