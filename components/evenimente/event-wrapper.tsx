"use client";

import {
  Calendar,
  CircleDollarSign,
  CirclePlay,
  ClockArrowUp,
  MapPin,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import formatDate from "@/utils/format-date";

interface EventProps {
  date: string;
  name: string;
  registrationTime: string;
  startTime: string;
  prizeAmount: number;
  bannerUrl: string;
  locationImageUrl: string;
  colaborator?: string | null;
  infoLocatie: string;
}

interface EventWrapperProps {
  evenimente: EventProps[];
}

const EventWrapper = ({ evenimente }: EventWrapperProps) => {
  const [events, setEvents] = useState<EventProps[]>([]);

  const calculateEventStatus = (event: EventProps) => {
    const currentDate = new Date();
    const eventDate = new Date(`${event.date}T${event.startTime}`);
    const eventEndTime = new Date(eventDate.getTime() + 1 * 60 * 60 * 1000);

    if (currentDate < eventDate) {
      return "Curând";
    } else if (currentDate >= eventDate && currentDate < eventEndTime) {
      return "În Desfășurare";
    } else {
      return "Încheiat";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Curând":
        return "#EEA427";
      case "În Desfășurare":
        return "#075F3A";
      case "Încheiat":
        return "#FF4235";
      default:
        return "#7F7F7F";
    }
  };

  const updateEventStatuses = useCallback(() => {
    const updatedEvents = evenimente
      .map((event) => ({
        ...event,
        status: calculateEventStatus(event),
      }))
      .sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.startTime}`);
        const dateB = new Date(`${b.date}T${b.startTime}`);

        return dateB.getTime() - dateA.getTime();
      });

    setEvents(updatedEvents);
  }, [evenimente]);

  useEffect(() => {
    updateEventStatuses();

    const intervalId = setInterval(() => {
      updateEventStatuses();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [updateEventStatuses]);

  return (
    <div className="mt-20 flex flex-wrap gap-5 justify-center">
      {events.map((event, index) => {
        const eventStatus = calculateEventStatus(event);
        const stsColor = getStatusColor(eventStatus);

        return (
          <div
            key={index}
            className="max-w-[374px] w-full bg-gradient-to-br from-nueva-gray2 to-nueva-dark border border-nueva-gray/50 rounded-30 overflow-hidden relative"
          >
            <div
              className="bg-contain bg-no-repeat bg-bottom w-[374px] h-[231px] p-8"
              style={{
                backgroundImage: `url(${event.bannerUrl})`,
              }}
            >
              <h4 className="text-[24px] font-bold text-nueva-white mb-5">
                {event.name}
              </h4>

              {event.colaborator && (
                <span className="text-xs italic">
                  Acest eveniment s-a desfășurat în colaborare cu{" "}
                  <b>{event.colaborator}</b>
                </span>
              )}
            </div>

            <div className="py-6 px-10">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Calendar className="text-nueva-orange" />
                  <span className="font-light capitalize">
                    <b className="font-semibold">Data: </b>
                    {formatDate(event.date)}
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <ClockArrowUp className="text-nueva-orange" />
                  <span className="font-light">
                    <b className="font-semibold">Înscriere: </b>
                    {event.registrationTime}
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <CirclePlay className="text-nueva-orange" />
                  <span className="font-light">
                    <b className="font-semibold">Desfășurare: </b>
                    {event.startTime}
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <MapPin className="text-nueva-orange" />
                  <span className="font-light">
                    <b className="font-semibold">Locație: </b>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="xs"
                          className="bg-nueva-white/75 text-nueva-dark border border-nueva-orange/30 !rounded-30"
                        >
                          Deschide harta
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="p-10 bg-gradient-to-br from-nueva-gray2 to-nueva-dark rounded-30 border border-nueva-gray2/50">
                        <div className="mt-10 mb-3 text-sm">
                          <b>Informații locație: </b>
                          <span>{event.infoLocatie}</span>
                        </div>

                        <h4 className="font-semibold">Hartă:</h4>
                        <Image
                          src={event.locationImageUrl}
                          width={1024}
                          height={768}
                          alt={`Locatia evenimentului ${event.name}.`}
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <CircleDollarSign className="text-nueva-orange" />
                  <span className="font-light">
                    <b className="font-semibold">Premii: </b>
                    {event.prizeAmount.toLocaleString()} $
                  </span>
                </li>
              </ul>

              <div className="mt-8 space-x-3">
                <span className="font-semibold">Status:</span>
                <span
                  className="text-sm px-4 py-1 font-bold rounded-30"
                  style={{ backgroundColor: stsColor }}
                >
                  {eventStatus}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventWrapper;
