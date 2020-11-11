import { NewsComponent } from './pages/dashboard/news/news.component';
import { FeedbackComponent } from './pages/dashboard/feedback/feedback.component';
import { EditnewsComponent } from './pages/dashboard/editnews/editnews.component';
import { ChangepasswordComponent } from './pages/dashboard/changepassword/changepassword.component';
import { AddnewsComponent } from './pages/dashboard/addnews/addnews.component';
import { EditcategoryComponent } from './pages/dashboard/editcategory/editcategory.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: [
   {path: 'category', component: CategoryComponent},
   {path: 'addcategory', component: AddcategoryComponent},
   {path: 'editcategory/:id', component: EditcategoryComponent},
   {path: 'news', component: NewsComponent},
   {path: 'addnews', component: AddnewsComponent},
   {path: 'changepassword', component: ChangepasswordComponent},
   {path: 'editnews/:id', component: EditnewsComponent},
   {path: 'feedback', component: FeedbackComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
