import {Component, Input} from '@angular/core';
import {IEmployee} from "../../mock/mock";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() workers: IEmployee[]
}
