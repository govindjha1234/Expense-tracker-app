import React from 'react'
import './Header.css';

const Header = () => {
    const Runner = "Welcome To My Mini-Project";
    const projectName = "Expense-Tracker";
    return (
        <div className="Project-header">
           <marquee><h2>{Runner}</h2></marquee> 
           <h1>{projectName}</h1>
           
        </div>
    )
};

export default Header;
