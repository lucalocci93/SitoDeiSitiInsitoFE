import { Component } from '@angular/core';

@Component({
  selector: 'app-documenti',
  templateUrl: './documenti.component.html',
  styleUrls: ['./documenti.component.css']
})
export class DocumentiComponent {
  data: any[] = [];

  //constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.getData().subscribe(data => {
      //this.data = data;
    //});
  }
}
