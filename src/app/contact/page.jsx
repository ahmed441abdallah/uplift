'use client';
import Map from '@/components/map';
import { MapProvider } from '@/components/map-provider';
import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Heading from '@/components/Heading';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const serviceId = 'service_jpovben';
        const templateId = 'template_a2oc0wn';
        const publicKey = '0dxipNTfzMtq_j2Aj';
        const templateParams = {
            user_name: contactData.name,
            user_email: contactData.email,
            user_phone: contactData.phone,
            to_name: 'Uplift',
            message: contactData.message,
        };
        emailjs
            .send(serviceId, templateId, templateParams,
                publicKey)
            .then(
                (res) => {
                    setLoading(false);
                    toast.success('Message send successfully');
                    setContactData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });

                },
                (error) => {
                    toast.error('Failed to send message');
                },
            );
    }
    return (
        <div className='text-primary'>
            <Heading text="Contact Us " url="https://cdn.pixabay.com/video/2020/02/05/31956-389724705_tiny.mp4" />

            <section className='pt-16 sm:p-32   grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4 mb-4'>
                <div>
                    <Image alt='contact' src="https://tadao.qodeinteractive.com/wp-content/uploads/2023/07/h1-img-14.png" width={700} height={600}></Image>
                </div>
                <div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                className="w-full rounded-lg bg-transparent border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                type="text"
                                name='name'
                                onChange={handleChange}
                                value={contactData.name}
                                id="name"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg bg-transparent border-gray-200 p-3 text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    name='email'
                                    onChange={handleChange}
                                    value={contactData.email}

                                    id="email"
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input
                                    className="w-full rounded-lg bg-transparent border-gray-200 p-3 text-sm"
                                    placeholder="Phone Number"
                                    type="tel"
                                    name='phone'
                                    onChange={handleChange}
                                    value={contactData.phone}
                                    id="phone"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                                className="w-full rounded-lg bg-transparent border-gray-300 p-3 text-sm"
                                placeholder="Message"
                                rows="8"
                                id="message"
                                name='message'
                                onChange={handleChange}
                                value={contactData.message}

                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                                disabled={loading}
                                type="submit"
                                className="inline-block disabled:cursor-not-allowed w-full border rounded-lg  bg-transparent px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <MapProvider>
                <Map></Map>
            </MapProvider>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Contact;
