import { Component } from '@angular/core';
import { Rooms,RoomList } from './rooms';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf,NgFor,DatePipe,NgClass],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.sass',
  preserveWhitespaces: true
})
export class RoomsComponent {
  hotelName = 'Yogi';
  numberOfRooms = 10;
  hideRooms = false;
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
      checkOutTime: new Date('2021-08-30')
    },
    {
      roomNumber: 102,
      roomType: 'Double',
      amenities: 'AC, TV, Wifi',
      price: 3000,
      photos: 'double.jpg',
      checkInTime: new Date('2021-08-28'),
      checkOutTime: new Date('2021-08-30')
    },
    {
      roomNumber: 103,
      roomType: 'Suite',
      amenities: 'AC, TV, Wifi',
      price: 5000,
      photos: 'suite.jpg',
      checkInTime: new Date('2021-08-28'),
      checkOutTime: new Date('2021-08-30')
    },
    {
      roomNumber: 104,
      roomType: 'Penthouse',
      amenities: 'AC, TV, Wifi',
      price: 10000,
      photos: 'penthouse.jpg',
      checkInTime: new Date('2021-08-28'),
      checkOutTime: new Date('2021-08-30')
    }
    
  ]

}
