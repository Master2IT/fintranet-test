import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { uploadReducer } from './state/upload.reducer';
import { UploadRoutingModule } from './upload-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UploadRoutingModule,
    StoreModule.forFeature('upload', uploadReducer)
  ]
})
export class UploadModule { }
