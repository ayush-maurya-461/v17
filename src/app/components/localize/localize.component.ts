import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-localize',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './localize.component.html',
  styleUrl: './localize.component.css'
})
export class LocalizeComponent {

}
