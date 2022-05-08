import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { FormConfigurationModule } from './components/form-configuration/form-configuration.module';
import { ConfigurationViewerModule } from './components/configuration-viewer/configuration-viewer.module';
import { FormViewerModule } from './components/form-viewer/form-viewer.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ConfigurationViewerModule,
    FormConfigurationModule,
    FormViewerModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
