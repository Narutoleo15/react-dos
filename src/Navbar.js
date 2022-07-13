import './Navbar.css';

export default function Navbar({ option1, option2, option3, option4 }) {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo" />
            </div>
            <div className="Navbar-links">
                <a href="l">{option1}</a>
                <a href="k">{option2}</a>
                <a href="n">{option3}</a>
                <a href="h">{option4}</a>
            </div>
        </div>
    );
}