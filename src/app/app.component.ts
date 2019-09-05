import { Component } from '@angular/core';
import { Post } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css','./app.component.scss']
})
export class AppComponent {
  title = 'partie2';
  posts = [

    new Post("Premier article","bababababababababaab")
,
    new Post("Deuxieme article","hhhhhhhhh")
,
    new Post("Encore un article","hhhhhhhhh")
  ];
}
