import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundError } from 'rxjs';
import { DistrictlistComponent } from './pages/districtlist/districtlist.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { DistrictComponent } from './pages/district/district.component';

export const routes: Routes = [

    {
        path:'', component:HomeComponent
    },
    {
        path:'district', component:DistrictComponent
    },
    {
        path:'districtlist/:title', component:DistrictlistComponent
    },
    {
        path:'explore', component:ExploreComponent
    },
    {
        path:'auth', component:AuthComponent
    },
    {
        path:'**', component:NotFoundError
    }

];
