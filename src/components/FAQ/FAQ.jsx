import React, { useState} from 'react'
import {IoAdd} from 'react-icons/io5'
import {GrClose} from 'react-icons/gr'
import './FAQ.css'

const FAQ = () => {

    const[isActive, setIsActive] = useState(false);


  return (
    <div className='app__faq'>
        <section className='app__faq-section'>
            <div className='app__faq-accordion'>
            <div className='app__faq-item'>
                <h1>Frequently Asked Questions</h1>
            </div>
                <div className='app__faq-accordion__item' id='#question1' onClick={() => {setIsActive(!isActive)}} >
                    <a className="app__faq-accordion-link"href="#question1">
                        How do I get started with Skoolbod? 
                        <IoAdd  color='black' />
                        <GrClose style={{display:'none'}} />
                    </a>

                    {isActive && (
                    <div className='app__faq-accordion-answer' >
                        <p>All we need is your school's name, logo, contact detail, 
                            names of students and their respective classes. We will then train 
                            the school staff to use the application effectively and add other 
                            pertinent data to the application.
                        </p>
                    </div>)}

                </div>
                <div className='app__faq-accordion__item' id='#question2'>
                    <a className="app__faq-accordion-link"href="#question2">
                        What makes Skoolbod different?
                        <IoAdd  color='black'/>
                        <GrClose style={{display:'none'}}/>
                    </a>
                    <div className='app__faq-accordion-answer'>
                        <p>Our services are world-class with exceptional customer service, realtime support,
                             updates and training materials. Features like external resources, discussions, appointments, 
                             and announcements gives the solution a classy feel.
                        </p>
                    </div>
                </div>
                <div className='app__faq-accordion__item' id='#question3'>
                    <a className="app__faq-accordion-link"href="#question3">
                        What's the pricing like?
                        <IoAdd  color='black'/>
                        <GrClose style={{display:'none'}}/>
                    </a>
                    <div className='app__faq-accordion-answer'>
                        <p>We onboard you to use the product free for a term with a 
                            subsequent subscription plan of silver: N550 and gold:N850.
                        </p>
                    </div>
                </div>
                <div className='app__faq-accordion__item' id='#question4'>
                    <a className="app__faq-accordion-link"href="#question4">
                        Do i need to install Skoolbod on my device to use it? 
                        <IoAdd  color='black'/>
                        <GrClose style={{display:'none'}}/>
                    </a>
                    <div className='app__faq-accordion-answer'>
                        <p>You do not have to install an applicationon your device to use Skoolbod.Itiscloud based. 
                            All that is needed is to access the application on any device browser by visiting <a href='www.skoolbod.net'>www.skoolbod.net.</a>
                        </p>
                    </div>
                </div>
                <div className='app__faq-accordion__item' id='#question5'>
                    <a className="app__faq-accordion-link"href="#question5">
                        What facility is needed to be put in place to use Skoolbod? 
                        <IoAdd  color='black'/>
                        <GrClose style={{display:'none'}}/>
                    </a>
                    <div className='app__faq-accordion-answer'>
                        <p>With a basic laptop or mobile device, a school or an individual onboarded on Skoolbod is ready to use the product. 
                            Schools with computer labs are good to go.
                        </p>
                    </div>
                </div>
                <div className='app__faq-accordion__item' id='#question6'>
                    <a className="app__faq-accordion-link"href="#question6">
                        Will training be provided after onboarding?
                        <IoAdd  color='black'/>
                        <GrClose style={{display:'none'}}/>
                    </a>
                    <div className='app__faq-accordion-answer'>
                        <p>Yes, our team will provide you with a proper onboarding session once you sign up. 
                            You would also receive regular webinars, system updates and tech support from us. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ;