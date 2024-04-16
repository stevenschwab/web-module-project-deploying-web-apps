import React, { useState } from 'react';
import '../styles/ContactForm.css';

const initialFormValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

export default function ContactForm() {
    const [formData, setFormData] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data in the future here (e.g., send to API)
        console.log(formData);
        alert('Thank you for your message. We will get back to you shortly.');
        setFormData(initialFormValues);
    };

    return (
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="subject">Subject:</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                />

                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}