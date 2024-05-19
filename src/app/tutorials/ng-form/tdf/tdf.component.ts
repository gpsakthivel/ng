import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];

  constructor() { }

  ngOnInit(): void {
  }

}
