import { Component } from '@angular/core';
import { Rooms,RoomList } from './rooms';
import { CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf,NgFor,DatePipe,CommonModule,FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.sass',
  preserveWhitespaces: true,
  
})
export class RoomsComponent {
  hotelName = 'Yogi';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom: RoomList |null = null;
  totalRooms!: number;
  originalRoomList: RoomList[]= [];

  constructor() {
    this.totalRooms = this.RoomList.length;
    this.originalRoomList = [...this.RoomList];
  }

searchRooms(event: Event) {
  const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
  
  if (!searchValue) {
    this.RoomList = [...this.originalRoomList];  // Reset to original when empty
    return;
  }

  this.RoomList = this.originalRoomList.filter(room =>
    room.roomType.toLowerCase().includes(searchValue) ||
    room.roomNumber.toString().includes(searchValue) 
  );
}

  
sortAscending: boolean = true; // Track sorting order

sortByPrice() {
  this.RoomList.sort((a, b) => {
    return this.sortAscending ? a.price - b.price : b.price - a.price;
  });

  this.sortAscending = !this.sortAscending; // Toggle sorting order
}



  newRoom: RoomList = {
    roomNumber: 0,
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date()
  };
  toggLe() {
    this.hideRooms = !this.hideRooms;
  }
  // rooms : Rooms ={
  //   availableRooms: 5,
  //   totalRooms: 10,
  //   bookedRooms: 5
  // }
  RoomList: RoomList[] = [
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
  ];
  onRoomSelected(room: RoomList): void {
    this.selectedRoom = room;
  }
  addRoom(): void {
    this.RoomList.push(this.newRoom);
    this.showToastMessage("Room added successfully!");
    this.totalRooms = this.RoomList.length;
    this.newRoom = {
      roomNumber:0,
      roomType: '',
      amenities: '',
      price: 0,
      photos: '',
      checkInTime: new Date(),
      checkOutTime: new Date()
    };
  }
  deleteRoom(roomNumber: number): void {
    const confirmDelete = window.confirm(`Are you sure you want to delete this room: ${roomNumber}?`);
    this.RoomList = this.RoomList.filter(room => room.roomNumber !== roomNumber);
    this.totalRooms = this.RoomList.length;  // Update totalRooms count
  }
  showToastMessage(message: string): void {
    alert(message);
  }  
}