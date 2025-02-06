import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import e from 'express';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent,NgSwitch,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'HotelInventoryApp';
  
   role = 'admin';


}
