import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DetailsComponent } from './details.component';


const routes: Routes = [
    {
        path: '', 
        children: [
            { path: '', component: DetailsComponent },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RatingsReviewRoutingModule { }