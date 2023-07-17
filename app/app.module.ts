import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { calculatorComponent } from './calculator/calculator.component';
import { DemoComponent } from './demo/demo.component';
import { DetComponent } from './det/det.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ReaComponent } from './rea/rea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AbComponent } from './ab/ab.component';
import { AgeComponent } from './age/age.component';
import { SkillsComponent } from './skills/skills.component';
import { ProComponent } from './pro/pro.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    calculatorComponent,
    DemoComponent,
    DetComponent,
    HomeComponent,
    DesignComponent,
    ReaComponent,
    TempComponent,
    NavbarComponent,
    AboutComponent,
    AbComponent,
    AgeComponent,
    SkillsComponent,
    ProComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
