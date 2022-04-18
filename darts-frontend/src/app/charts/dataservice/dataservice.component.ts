import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.css']
})
export class DataserviceComponent implements OnInit {
  options: any;
  ydata : number[] = [];
  xdata: number[] = [];

  constructor( 
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.getData();
    this.options = {
      legend: {
        data: ['bar'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data : this.xdata
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'line',
          data: this.ydata,
          // animationDelay: (idx) => idx * 10,
        }
      ],
      animationEasing: 'elasticOut',
      // animationDelayUpdate: (idx) => idx * 5,
    };
  }

  getData(){
    this.http.get<any>("http://127.0.0.1:8000/testdata")
      .subscribe(
        response => {
          console.log(response.data);
          for (let num in response.data){
            this.xdata.push(parseFloat(num));
            this.ydata.push(parseFloat(response.data[num]));
          }
            
        }
      )
  }

}
