import React, { useState } from 'react'
import faqList from '../../utils/faqs';

const Faqs = () => {
    const [faqs, setFaqs] = useState([...faqList]);

    const toggleHandler = (e) => {
        e.preventDefault()
        // console.log("e? ", e.target.id);
        const temp = [...faqList];
        temp[e.target.id].chosen = !temp[e.target.id].chosen;
        setFaqs([...temp]);
    }
    return (
        <div className='space_up'>
            <h1 className='normal-header'>Faqs</h1>
            <div className="faq-container">
                <div className="list-container">
                    <ul>
                        {faqs.map((faq) => {
                            const { id, question, answer, chosen } = faq
                            return (
                                <li key={id}>
                                    <p>{question}</p>
                                    {/* <button className="toggle-more-btn" onClick={toggleHandler}></button> */}
                                    <button className={`toggle-more-btn${chosen ? " rotate-btn" : ""}`} id={id} onClick={toggleHandler}></button>
                                    <p className={`faq-text${chosen ? " show-more" : ""}`}>{answer}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Faqs