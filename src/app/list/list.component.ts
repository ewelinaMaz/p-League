import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listService: ListService;
  table: any;
  private activatedRoute: ActivatedRoute;

  constructor(listService: ListService, activatedRoute: ActivatedRoute) {
    this.listService = listService;
    this.activatedRoute = activatedRoute;
  }

  showList() {
    this.activatedRoute.data.subscribe((data) => {
      this.table = data.res.data;
      console.log(this.table);
      return this.table;
    });
  }

  ngOnInit() {
    this.showList();
  }
}
