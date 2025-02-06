import { Component } from '@angular/core';
import { Rooms,RoomList } from './rooms';
import { CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf,NgFor,DatePipe,CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.sass',
  preserveWhitespaces: true
})
export class RoomsComponent {
  hotelName = 'Yogi';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom: RoomList |null = null;
  
  
  
  toggLe() {
    this.hideRooms = !this.hideRooms;
  }
  rooms : Rooms ={
    availableRooms: 5,
    totalRooms: 10,
    bookedRooms: 5
  }
  RoomList : RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Single',
      amenities: 'AC, TV, Wifi',
      price: 2000,
      photos: 'single.jpg',
      checkInTime: new Date('2021-08-28'),
      checkOutTime: new Date('2021-09-30')
    },
    {
      roomNumber: 102,
      roomType: 'Double',
      amenities: 'AC, TV, Wifi',
      price: 3000,
      photos: 'double.jpg',
      checkInTime: new Date('2022-07-27'),
      checkOutTime: new Date('2022-07-31')
    },
    {
      roomNumber: 103,
      roomType: 'Suite',
      amenities: 'AC, TV, Wifi',
      price: 5000,
      photos: 'suite.jpg',
      checkInTime: new Date('2021-02-22'),
      checkOutTime: new Date('2021-02-25')
    },
    {
      roomNumber: 104,
      roomType: 'Penthouse',
      amenities: 'AC, TV, Wifi',
      price: 7500,
      photos: 'penthouse.jpg',
      checkInTime: new Date('2021-01-03'),
      checkOutTime: new Date('2021-01-07')
    },
    
  ]
  onRoomSelected(room: RoomList): void {
    console.log('Button Clicked!'); 
    this.selectedRoom = room;
    console.log('Selected room:', this.selectedRoom);  // Log to verify
    
  }
}
