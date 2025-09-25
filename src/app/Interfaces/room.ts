import { BookedDate } from "./booked-date";
import { RoomImage } from "./room-image";

export interface Room {
    id: number;
    name: string;
    hotelId: number;
    pricePerNight: number;
    available: boolean;
    maximumGuests: number;
    roomTypeId: number;
    bookedDates: BookedDate[];
    images: RoomImage[];
}
