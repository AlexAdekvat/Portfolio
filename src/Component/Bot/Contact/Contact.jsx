import React from 'react';
import s from './Contact.module.css';


const Contact = () => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.contact}>
                    Contacts
                <div>
                        <div>
                            <input placeholder=" Name" class={s.name} />
                        </div>
                        <div>
                            <input placeholder=' Email' class={s.email} />
                        </div>
                        <div>
                            <input placeholder=' Message' class={s.message} />
                        </div>
                        <div>
                            <input type='submit' value='Submit' class={s.button} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;