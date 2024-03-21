import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss'],
})
export class PostlistComponent implements OnInit {
  allPost: any = [];
  constructor(private _postService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getallPost();
  }

  getallPost() {
    this._postService.getPost().subscribe({
      next: (data) => {
        console.log(data);
        this.allPost = data;
      },
      error: (err) => console.log(err),
    });
  }
 
postTrackBy(index:any, post:any) {
    return post.id;
  }

  navigateToDetail(id: any) {
    this.router.navigate(['post', id]);
  }
}
