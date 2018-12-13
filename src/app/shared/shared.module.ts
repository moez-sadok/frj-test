import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // Material
    MaterialModule
    // End material
  ],
})
export class SharedModule {}
