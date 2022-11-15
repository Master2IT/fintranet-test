import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api'
import { updateStep } from '../store/app.actions';
import { addImage } from './state/upload.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {
  goNextPage: boolean = false;
  file: string = ""

  constructor(private store: Store) { }

  ngOnInit(): void { }

  onUpload(e: any) {
    this.file = URL.createObjectURL(e.files[0])
    this.store.dispatch(addImage({ image: this.file }))
  }

  onNextPage() {
    if (this.file) {
      this.store.dispatch(updateStep({ step: 'form' }))
      this.goNextPage = true;
    }
  }

}
