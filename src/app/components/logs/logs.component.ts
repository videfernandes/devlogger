import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe((logs) => {
      this.logs = logs;
    }); //fetching from the service sync
  }

  onSelect(log: Log) {
    console.log(log);
    this.logService.setFormLog(log);
  }
}
