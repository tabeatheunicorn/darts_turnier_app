import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DataserviceComponent } from './charts/dataservice/dataservice.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DataserviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
