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
        //errors.email = 'Email address is required';
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
                <div className={s.input}>
                    <form
                    action="https://formspree.io/mvoabver"
                    method="POST"
                    >
                        <div className={s.names}>
                            <input
                                onChange={(e) => setNameError(e.currentTarget.value)}
                                value={nameError} required
                                name={'name'}
                                type='name'
                                placeholder="Name"
                                className={s.name} />
                            {error.name && (
                                <p className={s.danger}>
                                    {error.name}
                                </p>
                            )}

                        </div>
                        <div className={s.emails}>
                            <input
                                onChange={(e) => setErrors(e.currentTarget.value)}
                                value={emailErrors} required
                                name={'email'}
                                type='email'
                                placeholder=' Email'
                                className={s.email} />
                            {errors.email && (
                                <p className={s.danger}>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className={s.messages}>
                            <textarea
                             onChange={(e) => setMessageError(e.currentTarget.value)}
                                 value={messageError}required
                                 name={'message'}
                                placeholder=' Message'
                                className={s.message} />
                                 {merror.message && (
                                <p className={s.danger}>
                                    {merror.message}
                                </p>
                            )}
                        </div>
                        <div className={s.btn}>
                           <button disabled={ !messageError || !emailErrors || !nameError ||
                            nameError.length <2 || messageError.length < 10} 
                                type='submit'
                                value='Submit'
                                className={s.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;