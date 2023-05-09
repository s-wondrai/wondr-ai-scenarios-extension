import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListJsonsRoutingModule } from './list-jsons-routing.module';
import { ListJsonsComponent } from './list-jsons.component';
import {HttpClientModule} from "@angular/common/http";
import { GoogleSheetService } from "../../services/google-sheet/google-sheet.service";

@NgModule({
  declarations: [ListJsonsComponent],
  imports: [CommonModule, ListJsonsRoutingModule, HttpClientModule],
  providers: [GoogleSheetService]
})
export class ListJsonsModule {}
