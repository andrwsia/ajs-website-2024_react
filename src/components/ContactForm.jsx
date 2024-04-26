import React, { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending data to a server
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className='w-full'>
                    <label htmlFor="name" className='text-lg-dark'>Name:</label>
                    <input
                        className='text-md-dark'
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="email" className='text-lg-dark'>Email:</label>
                    <input
                        className='text-md-dark'
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="message" className='text-lg-dark'>Message:</label>
                    <textarea
                        className='text-md-dark'
                        id="message"
                        name="message"
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className='button-3'>Submit</button>
            </form>
        </>
    );
};

export default ContactForm;