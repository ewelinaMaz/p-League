import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
  ],
})
export class ListModule {}
