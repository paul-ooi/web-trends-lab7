import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../planet';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() planet :Planet;
  constructor() { }

  ngOnInit() {
  }

}
