import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { NewsComponent } from './pages/dashboard/news/news.component';
import { FeedbackComponent } from './pages/dashboard/feedback/feedback.component';
import { EditnewsComponent } from './pages/dashboard/editnews/editnews.component';
import { EditcategoryComponent } from './pages/dashboard/editcategory/editcategory.component';
import { ChangepasswordComponent } from './pages/dashboard/changepassword/changepassword.component';
import { AddnewsComponent } from './pages/dashboard/addnews/addnews.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CategoryComponent,
    AddnewsComponent,
    AddcategoryComponent,
    NewsComponent,
    ChangepasswordComponent,
    FeedbackComponent,
    EditnewsComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
