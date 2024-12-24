'use client';
import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const ChatButton = () => {
    const phoneNumber = "971588320428" // Removed the '+' as WhatsApp's URL doesn't require it
    const message = "Hello, I'm interested in your services!"

    const handleClick = () => {
        // Log for debugging
        console.log("Button clicked")

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        // Log the URL for debugging
        console.log("WhatsApp URL:", whatsappUrl)

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    }

    return (

        <button onClick={handleClick} className="text-black flex items-center justify-center gap-2 bg-gray-200 mb-2 p-2 rounded-xl">
            Direct message <MessageCircleMore className="size-5" />
        </button>
    )
}

export default ChatButton
