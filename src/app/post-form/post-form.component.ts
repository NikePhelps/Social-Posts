import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() socialPosts: string[];
  @Output() onAddPost = new EventEmitter<any>();

  constructor() { }

  addPost(form): void {
    this.onAddPost.emit({ title: form.value.postTitle, thought: form.value.postThought });
  }

  ngOnInit() {
  }

}
