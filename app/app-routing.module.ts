import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbComponent } from './ab/ab.component';
import { AgeComponent } from './age/age.component';
import { calculatorComponent } from './calculator/calculator.component';
import { DemoComponent } from './demo/demo.component';
import { DesignComponent } from './design/design.component';
import { DetComponent } from './det/det.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProComponent } from './pro/pro.component';
import { ReaComponent } from './rea/rea.component';
import { SkillsComponent } from './skills/skills.component';
import { TempComponent } from './temp/temp.component';


const routes: Routes = [
  {path:'calculator',component:calculatorComponent},
  {path:'demo',component:DemoComponent},
  {path:'det',component:DetComponent},
  {path:'',component:HomeComponent},
  {path:'design',component:DesignComponent},
 {path:'rea',component:ReaComponent},
  {path:'temp',component:TempComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'age', component:AgeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'pro',component:ProComponent},
  {path:'footer',component:FooterComponent},
  {path:'ab',component:AbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
