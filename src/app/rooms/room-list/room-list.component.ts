import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.sass'
})
export class RoomListComponent {
  @Input() rooms: any;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
