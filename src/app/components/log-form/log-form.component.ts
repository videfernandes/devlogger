import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    //subscribe to the selected Log (observable)

    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
      console.log(log);
    });
  }
}
