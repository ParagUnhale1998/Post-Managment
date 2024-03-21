import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent {
  addPostForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _postApiService: ApiService,
    private router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.handleaddPostForm();
  }

  handleaddPostForm() {
    this.addPostForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(10),Validators.pattern(/^[a-zA-Z0-9-_ ]*$/)]],
      body: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  handleAddPost() {
    console.log(this.addPostForm.value);

    if (this.addPostForm.valid) {
      this._postApiService.addpost(this.addPostForm.value).subscribe({
        next:(data) => {
        console.log('Post Added Succesfull');
        this.addPostForm.reset()
      },error:(err) => {
        console.log(err)
      }
    });
    } else {

    }
  }
}
