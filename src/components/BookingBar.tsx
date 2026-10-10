"use client";
import { useState } from "react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Any Room");
  const [guests, setGuests] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I want to check availability at K V Complex Rooms.%0ACheck-in: ${checkIn || "flexible"}%0ACheck-out: ${checkOut || "flexible"}%0ARoom type: ${roomType}%0AGuests: ${guests}`;
    window.open(`https://wa.me/918113932004?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-white shadow-lg border-b border-zinc-100 py-1">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-end py-5"
        aria-label="Check room availability"
      >
        <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide" htmlFor="checkin">
            Check In
          </label>
          <input
            id="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide" htmlFor="checkout">
            Check Out
          </label>
          <input
            id="checkout"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide" htmlFor="roomtype">
            Room Type
          </label>
          <select
            id="roomtype"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand bg-white"
          >
            <option>Any Room</option>
            <option>Budget Room</option>
            <option>Double Room</option>
            <option>Family Room</option>
            <option>Apartment</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-[100px]">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide" htmlFor="guests">
            Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand bg-white"
          >
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm whitespace-nowrap min-w-[160px]"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
}
