import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss'],
})
export class PostdetailsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  id!: string;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private _postApiService: ApiService
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getPostDetail();
  }

  getPostDetail() {
    this._postApiService.getPostByID(this.id).subscribe({
      next: (data) => {
        this.post = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
