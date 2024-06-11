import { NgFor } from '@angular/common';
import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements OnInit{
  search = signal(
    isPlatformBrowser(this.platformId) ? localStorage.getItem('searchString') || '' : ''
  )
  users = signal([
    {id:0, name: "Ayush"},
    {id:1, name: "Aditya"}
  ])
  filteredUsers = computed(()=> this.users().filter(u => u.name.toLowerCase().startsWith(this.search().toLowerCase())))

  logger = effect(()=>{
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('searchString', this.search());
    }  
  })

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
  }

  updateSearchString(e:Event){
    this.search.set((e.target as HTMLInputElement).value)
  }

  addUser(){
    this.users.update(users=> [...users, {id:3, name:'Trisha'}])
  }

}
