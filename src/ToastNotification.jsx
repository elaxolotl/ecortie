import React, { useEffect } from 'react';
import './ToastNotification.css';

const ToastNotification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Hide after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast-notification">
            {message}
        </div>
    );
};

export default ToastNotification;
