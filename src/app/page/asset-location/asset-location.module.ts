import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetLocationPageRoutingModule } from './asset-location-routing.module';

import { AssetLocationPage } from './asset-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetLocationPageRoutingModule
  ],
  declarations: [AssetLocationPage]
})
export class AssetLocationPageModule {}
