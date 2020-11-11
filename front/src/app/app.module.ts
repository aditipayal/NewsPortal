import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CatnewsComponent } from './pages/catnews/catnews.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './pages/search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    CatnewsComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
