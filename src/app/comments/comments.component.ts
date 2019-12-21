import { Component, OnInit } from '@angular/core';
import {Comment} from "./model/comment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {

  commentsCatalog: Comment[] = [];
  commentsView: Comment[] = [];
  start = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  load_comments() {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    this.http.get<Comment[]>(url).subscribe(comments => {
      //ta funkcja jest wykonana dopiero gdy zapytanie zwróci dane
      this.commentsCatalog = comments;
      this.selectView();
    })
  }

  previous() {
    this.start -= 5;
    this.selectView();
  }

  next() {
    this.start += 5;
    this.selectView();
  }

  private selectView() {
    this.commentsView = this.commentsCatalog.slice(this.start, this.start + 5);
  }
}
