import exp from "constants";

export interface Rooms{
    availableRooms: number;
    totalRooms: number;
    bookedRooms : number;
}
export interface RoomList{
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime : Date;
    checkOutTime: Date;
}
export interface newRoom{
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime : Date;
    checkOutTime: Date;
}