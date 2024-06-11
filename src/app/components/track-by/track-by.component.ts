import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-track-by',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './track-by.component.html',
  styleUrl: './track-by.component.css'
})
export class TrackByComponent {
  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  trackById(index: number, item: Item): number {
    return item.id;
  }

  addItem() {
    const newItem = { id: this.items.length + 1, name: `Item ${this.items.length + 1}` };
    this.items.push(newItem);
  }

  changeItem() {
    this.items[1].name = 'Updated Item 2';
  }

  removeItem() {
    this.items.pop();
  }
}
