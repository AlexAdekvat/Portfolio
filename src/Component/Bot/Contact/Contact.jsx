import React from 'react';
import s from './Contact.module.css';
// const Contact = () => {
//     const [name, setName] = useState('');
const Contact = () => {
    return (
        <div id='contact' className={s.container}>
            <div className={s.contact}>
                Contacts
                     <div>
                    <form>
                    <div>
                        <input type='name' placeholder=" Name" class={s.name} />
                    </div>
                    <div>
                        <input type='email' placeholder=' Email' class={s.email} />
                    </div>
                    <div>
                        <input placeholder=' Message' class={s.message} />
                    </div>
                    <div>
                        <input type='submit' value='Submit' class={s.button} />
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;