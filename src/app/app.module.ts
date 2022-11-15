import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';
import { MembersComponent } from './members/members.component';
import { SummaryComponent } from './summary/summary.component';
import { FormThemeComponent } from './components/form-theme/form-theme.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects'


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    FormComponent,
    MembersComponent,
    SummaryComponent,
    FormThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    InputNumberModule,
    DropdownModule,
    KeyFilterModule,
    CalendarModule,
    FormsModule,
    TableModule,
    TagModule,
    StoreModule.forRoot({ 'appState': appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
