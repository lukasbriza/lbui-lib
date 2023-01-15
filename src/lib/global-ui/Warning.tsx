import './Icon.scss'
import React from 'react'

export const Warning = (props) => {
    return (
        <div className="container">
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="m24 0-6 22-8.129-7.239 7.802-8.234-10.458 7.227L0 12 24 0zM9 16.668V24l3.258-4.431L9 16.668z" />
            </svg>
        </div>
    )
}