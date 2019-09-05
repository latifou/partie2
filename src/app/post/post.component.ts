 import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css','./post.component.scss']
})


export class PostComponent implements OnInit {

  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.post.loveIts = this.post.loveIts +1;
  }

  dontLike(){
    this.post.loveIts = this.post.loveIts -1;
  }

  getTextColor(){
    if(this.post.loveIts < 0)
     {
       return 'red'
     }
     else
     {
       if(this.post.loveIts > 0)
        {
          return 'green'
        }
        else
        {
          return 'inherit'
        }
     }
  }
}

export class Post {
  title : string;
  content : string;
  loveIts : number;
  created_at : Date;

  constructor(public ptitle :string,public pcontent : string){

    this.title = ptitle;
    this.content = pcontent;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}
