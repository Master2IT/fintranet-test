import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'upload', loadChildren: () => import('./upload/upload.module').then((m) => m.UploadModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
  { path: 'members', loadChildren: () => import('./members/members.module').then((m) => m.MembersModule) },
  { path: 'summary', loadChildren: () => import('./summary/summary.module').then((m) => m.SummaryModule) },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
