import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../Services/details.service';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  details = [];

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    // tslint:disable-next-line:variable-name
    // tslint:disable-next-line:typedef-whitespace

    this.detailsService.getDetail().subscribe((data : any[]) => {
      console.log('data', data);
      this.details = data;
    });


  }

  // getMoreDetail(id){

  // }
}
