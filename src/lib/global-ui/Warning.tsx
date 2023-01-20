import './Icon.scss'
import React from 'react'
import clsx from 'clsx'

export const Warning = (props) => {
    const { className, ...other } = props
    return (
        <div className={clsx(['lbui-icon-container', className])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...other}>
                <path
                    d="m2.095 19.886 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116zm1.935-.384h15.939l-7.97-14.219zm7.972-6.497a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75zm-.002-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fillRule="nonzero"
                />
            </svg>
        </div>
    )
}