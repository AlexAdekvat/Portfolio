import React, { useState } from 'react';
import s from './Contact.module.css';
import { useTranslation } from 'react-i18next';



const ContactContainer = () => {
    const { t, i18n } = useTranslation();

    const [nameError, setNameError] = useState('');
    let error = {};
    if (!nameError) {
        // error.name = 'ERROR'
    } else if (nameError.length < 2 || nameError.length > 10){
        error.name = 'Enter at least three characters'
    }
    


    const [emailErrors, setErrors] = useState('');
    let errors = {};
    if (!emailErrors) {
    } else if (!/\S+@\S+\.\S+/.test(emailErrors )) {
         errors.email = 'Enter a valid value';
        // errors.email = 'Email address is required';

    };


    const [messageError, setMessageError] = useState('');
    let merror = {};
    if (!messageError) {
        // merror.message = 'ERROR'
    } else if (messageError.length < 10 || messageError.length > 100){
        merror.message = 'Enter at least ten characters'
    }



    return (
        <div id='contact' className={s.container}>
            <div className={s.contact}>
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
                                placeholder={t('Name')}
                                className={s.name} />
                            {error.name && (
                                <p className={s.danger}>
                                    {/* {error.name}  */}
                                    {t('ErrorName')}
                                </p>
                            )}

                        </div>
                        <div className={s.emails}>
                            <input
                                onChange={(e) => setErrors(e.currentTarget.value)}
                                value={emailErrors} required
                                name={'email'}
                                type='email'
                                placeholder={t('Email')}
                                className={s.email} />
                            {errors.email && (
                                <p className={s.danger}>
                                    {t('ErrorEmail')}
                                </p>
                            )}
                        </div>
                        <div className={s.messages}>
                            <textarea
                             onChange={(e) => setMessageError(e.currentTarget.value)}
                                 value={messageError}required
                                 name={'message'}
                                placeholder={t('Message')}
                                className={s.message} />
                                 {merror.message && (
                                <p className={s.danger}>
                                    {t('ErrorMessage')}
                                </p>
                            )}
                        </div>
                        <div className={s.btn}>
                           <button disabled={ !messageError || !emailErrors || !nameError ||
                            nameError.length <2 || messageError.length <11} 
                                type='submit'
                                value='Submit'
                                className={s.button}>{t('Submit')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactContainer;