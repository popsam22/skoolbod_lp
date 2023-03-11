import React from 'react';
import student from "../../assets/student2.jpg";
import "./Header.css"

const Header = () => {
    return (
        <div className='app__header' id='home'>
            <div className='app__header-title'>
                <h1 className='app__header-title-h1'>Online Learning Redesigned For Every Student.</h1>
                <p className='app__header-title-p'>This is a placeholder for value props to tell story and let users 
                    know a little more about skoolbod's product and services. how we can benefit them.
                </p>
                <div className='app__header-title-button'>
                    <button type='button'> Try Skoolbod for Free</button>
                </div>
            </div>

            <div className='app__header-image'>
                <img  src={student} alt="student learning"/>
            </div>
        </div>
    ) 
}

export default Header;