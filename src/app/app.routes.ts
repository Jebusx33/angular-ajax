import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlagsComponent } from './components/flags/flags.component';
import { ResqestComponent } from './components/resqest/resqest.component';

//import { SearchComponent } from './components/search/search.component';
export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'flags', component:FlagsComponent},
    {path:'resqest', component:ResqestComponent},
   // {path:'search', component:SearchComponent},
    {path:'', pathMatch:'full', redirectTo:'home' },
    {path:'**', pathMatch:'full', redirectTo:'home' }
];