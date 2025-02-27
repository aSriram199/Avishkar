import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css';

const ScrollUpButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-up-button">
            {isVisible && 
                <button onClick={scrollToTop} style={buttonStyle}>
                    ↑
                </button>
            }
        </div>
    );
};

const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    padding: '10px 15px',
    fontSize: '20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
};

export default ScrollUpButton; 