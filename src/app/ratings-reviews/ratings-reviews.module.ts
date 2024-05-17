import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatingsReviewRoutingModule} from './ratings-reviews.routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
      RatingsReviewRoutingModule
    ],
    declarations: [
        
        DetailsComponent,
    
    ]
})
export class RatingsModule { }