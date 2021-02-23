import React, { useState } from "react";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        e.preventDefault();
        console.log(formState);
    }
    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    //jsx
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* //name */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                {/* //email */}
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={name} onChange={handleChange} name="email" />
                </div>
                {/* //message */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>

        </section>
    )
}

export default ContactForm;