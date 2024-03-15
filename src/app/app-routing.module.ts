import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; // Import MainPageComponent

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent // Set MainPageComponent as the component for the empty path
  },
  {
    path: '',
    component: MainPageComponent, // Set MainPageComponent as the component for the empty path
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
