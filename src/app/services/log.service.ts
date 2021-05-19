import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('05/19/2021 17:24:50'),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('05/19/2021 17:26:50'),
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('05/19/2021 17:28:50'),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
