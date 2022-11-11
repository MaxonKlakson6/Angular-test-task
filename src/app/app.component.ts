import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";

import {mockData, links, IWorkers} from "./mock/mock";
import {NgbNavChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links = links;
  tab = 0;
  workers: IWorkers = mockData.data;
  title = this.links.find((link) => link.value === this.tab)?.title;

  constructor(private router: Router, private titleService: Title) {
  }

  onChangeTab(event: NgbNavChangeEvent) {
    this.tab = Number(event.nextId);

    this.router.navigate([], {queryParams: {tab: this.tab}});

    this.title = this.links.find((link) => link.value === this.tab)?.title;

    if(this.title) {
      this.titleService.setTitle(this.title);
    }
  }

  ngOnInit(): void {
    this.router.navigate([], {queryParams: {tab: this.tab}});

    if(this.title) {
      this.titleService.setTitle(this.title);
    }
  }
}
