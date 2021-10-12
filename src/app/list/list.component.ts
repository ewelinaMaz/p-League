import { Component, OnInit } from '@angular/core';
import { List } from '../interface/list';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
ranking = [];
listService: ListService;

  constructor(listService: ListService) {
    this.listService = listService;
  }

  showList() {
    this.listService.getList()
    .subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.showList();
  }
}
