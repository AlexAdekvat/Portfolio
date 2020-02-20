import React, { useState } from 'react';
import s from './Contact.module.css';


const Contact = () => {

    const [nameError, setNameError] = useState('');
    let error = {};
    if (!nameError) {
        // error.name = 'ERROR'
    } else if (nameError.length < 2 || nameError.length > 10){
        error.name = 'ERROR'
    }


    const [emailErrors, setErrors] = useState('');
    let errors = {};
    if (!emailErrors) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(emailErrors )) {
        errors.email = 'Email address is invalid';
    };


    const [messageError, setMessageError] = useState('');
    let merror = {};
    if (!messageError) {
        // merror.message = 'ERROR'
    } else if (messageError.length < 10 || messageError.length > 100){
        merror.message = 'ERROR'
    }



    return (
        <div id='contact' className={s.container}>
            <div className={s.contact}>
                Contacts
                <div>
                    <form
                    action="https://formspree.io/mvoabver"
                    method="POST"
                    >
                        <div className={s.name}>
                            <input
                                onChange={(e) => setNameError(e.currentTarget.value)}
                                value={nameError}
                                type='name'
                                placeholder="Name"
                                class={`${error.name} && is-danger`} />
                            {error.name && (
                                <p className="help is-danger">
                                    {error.name}
                                </p>
                            )}

                        </div>
                        <div className={s.email}>
                            <input
                                onChange={(e) => setErrors(e.currentTarget.value)}
                                value={emailErrors}
                                type='email'
                                placeholder=' Email'
                                className={`${errors.email} && is-danger`} />
                            {errors.email && (
                                <p className="help is-danger">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className={s.message}>
                            <textarea
                             onChange={(e) => setMessageError(e.currentTarget.value)}
                                 value={messageError}
                                placeholder=' Message'
                                class={`${merror.message} && is-danger`} />
                                 {merror.message && (
                                <p className="help is-danger">
                                    {merror.message}
                                </p>
                            )}
                        </div>
                        <div className={s.button}>
                           <button disabled={ !messageError || !emailErrors || !nameError ||
                            nameError.length <2 || messageError.length <2 } 
                                type='submit'
                                value='Submit'
                                class={s.btn}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;