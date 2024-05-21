import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const email = 'shahjalaljamemosque@gmail.com';
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_l8ya2hf",
                "template_rs4ylil",
                form.current,
                "TVYnzKeI5_V3yx4QS"
            )
            .then(
                (result) => {
                    console.log(result);
                    if (result.text === "OK") {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Send Successfully",
                            showConfirmButton: false,
                            timer: 1355,
                        });

                        // Reset the form after successful submission
                        form.current.reset();


                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="bg-green-100 py-8">
            <div className="container mx-auto px-4 md:px-10">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
                <div className="max-w-2xl mx-auto bg- rounded-md shadow-lg p-6">
                    <div className="mb-8">
                        <p className="text-xl font-medium text-green-700">Shahjalal Mosque Bristol</p>
                        <p className="text-gray-600">468-470 Stapleton Rd, Eastville, Bristol BS5 6PE</p>
                        <p className="text-gray-600">United Kingdom</p>
                        <p className="text-gray-600">Email: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
                        <p className="text-gray-600">Imam: 07896 985835</p>
                        <p className="text-gray-600">Phone: 0117 9519988</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                value="Send"
                                className="inline-block w-full px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-2 focus:ring-2 focus:ring-offset-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;








