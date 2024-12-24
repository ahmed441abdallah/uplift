"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "./animated-modal";
import { CircleHelp, Mail, MailIcon, MapPin, PhoneCall, StickyNote } from "lucide-react";
import ChatButton from "./chatbtn";
import Link from "next/link";

export function AnimatedModalDemo() {
    return (
        (<div className=" py-2 flex items-center justify-center right-2  absolute">
            <Modal>
                <ModalTrigger
                    className=" bg-white text-black flex justify-center group/modal-btn">
                    <span
                        className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Quick Actions
                    </span>
                    <div
                        className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        ✈️
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4
                            className="text-lg md:text-2xl text-neutral-500 font-bold text-center mb-8">
                            Don’t hesitate to contact us
                        </h4>
                        <button className="text-black flex items-center justify-center gap-2 bg-gray-200 mb-2 p-2 rounded-xl">
                            FAQ <CircleHelp className="size-5" />
                        </button>
                        <Link href='/contact' className="text-black flex items-center justify-center gap-2 bg-gray-200 mb-2 p-2 rounded-xl">
                            Contact via mail <Mail className="size-5" />
                        </Link>
                        <ChatButton />

                        <Link href='/licence.pdf' rel="noopener noreferrer" target="_blank" className="text-black flex items-center justify-center gap-2 bg-gray-200 mb-2 p-2 rounded-xl">
                            License  <StickyNote className="size-5" />
                        </Link>
                        <h1 className="text-black flex gap-2 items-center"> <PhoneCall size={15} />+971 588320428 </h1>
                        <h1 className="text-black flex gap-2 items-center"> <PhoneCall size={15} />+971 564240015 </h1>
                        <h1 className="text-black flex gap-2 items-center"> <MapPin size={15} />Dubai, United Arab Emirates </h1>
                        <h1 className="text-black flex gap-2 items-center"> <MailIcon size={15} />info@upliftinteriorsae.com</h1>

                    </ModalContent>


                </ModalBody>
            </Modal>
        </div>)
    );
}

const PlaneIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
        </svg>)
    );
};

const VacationIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
            <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
            <path
                d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
            <path d="M15 9l-3 5.196" />
            <path
                d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
        </svg>)
    );
};

const ElevatorIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
        </svg>)
    );
};

const FoodIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
        </svg>)
    );
};

const MicIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
            <path
                d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
        </svg>)
    );
};

const ParachuteIcon = ({
    className
}) => {
    return (
        (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 12a10 10 0 1 0 -20 0" />
            <path
                d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
            <path d="M2 12l10 10l-3.5 -10" />
            <path d="M15.5 12l-3.5 10l10 -10" />
        </svg>)
    );
};
