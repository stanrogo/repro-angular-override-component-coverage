import { Component, signal } from '@angular/core';
import { AppChild } from './child/child';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [AppChild],
})
export class App {}
