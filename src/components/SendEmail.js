import { useState } from 'react';
import sendEmail from '../assets/icons/send_email.png';
import emailjs from '@emailjs/browser';

const EmailComponent = () => {
    const [emailData, setEmailData] = useState({
        emailBody: "",
        contact: ""
    });
    const [sendingMessage, setSendingMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [failMessage, setFailMessage] = useState();

    const onChangeForm = event => {
        setEmailData({ ...emailData, [event.target.name]: event.target.value });
    };

    const onSubmitForm = event => {
        event.preventDefault();

        setSendingMessage(true);
        setTimeout(() =>
            emailjs.send('service_3eemnes', 'template_huaawd7', emailData, 'B8P8E_vuok57NHhoV')
                .then(() => {
                    console.log("Message sent successfully");
                    setSendingMessage(false);
                    setSuccessMessage(true);
                    setFailMessage(false);
                    setEmailData({ emailBody: "", contact: "" });
                })
                .catch(err => {
                    console.error(`Message failed with ${err}`);
                    setSendingMessage(false);
                    setSuccessMessage(false);
                    setFailMessage(true);
                }), 2000);

    };

    return (
        <>
            <div className={`flex items-center justify-center text-xl text-secondaryBg bg-primaryBg  h-fit w-full ${sendingMessage || successMessage || failMessage ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
                <p>
                    {sendingMessage ?
                        <div role="status">
                            <svg aria-hidden="true" className="w-10 h-10 animate-spin fill-primaryBg" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div> :
                        successMessage ? `Thank You for contacting me` : 'Sorry there was an error. Please consider contacting via email'
                    }
                </p>
            </div>
            <form onSubmit={onSubmitForm} className='grid grid-rows-5 gap-10 lg:p-10 w-full h-full items-center'>
                <div className="flex items-center bg-primaryBg border-2 border-neonBg rounded-2xl py-2 h-full w-full">
                    <input className="bg-primaryBg/0 h-full w-full py-1 px-2 leading-tight focus:outline-none place-items-end text-xl" placeholder='Where can I contact you?' type="text" name="contact" value={emailData.contact} onChange={onChangeForm} required />
                </div>
                <div class="row-span-3 flex items-center bg-primaryBg border-2 h-full border-neonBg rounded-2xl w-full py-2 text-2xl">
                    <textarea className=" bg-primaryBg/0 resize-none h-full w-full mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Your message..." type="text" name="emailBody" value={emailData.emailBody} onChange={onChangeForm} required />
                </div>

                <div className='h-fit justify-center flex'>
                    <button type="submit" className='w-fit h-fit'>
                        <div className={`flex flex-wrap w-fit h-fit rounded-full items-center justify-center bg-neonBg transition ease-in-out duration-150 hover:scale-110 border-4 border-neonBg p-4`}>
                            <img src={sendEmail} className="h-8 w-8" alt="email"></img>
                        </div>
                    </button>
                </div>
            </form>
        </>
    );
}

export default EmailComponent; 