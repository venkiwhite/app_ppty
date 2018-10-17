import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-group',
  templateUrl: './project-group.component.html',
  styleUrls: ['./project-group.component.scss']
})
export class ProjectGroupComponent implements OnInit {

  @Input() inputData;

  constructor() { }

  ngOnInit() {
  }

}
