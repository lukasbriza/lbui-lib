import './Icon.scss'
import React, { SVGProps } from "react"
import clsx from 'clsx'

export const Arrow = (props: SVGProps<SVGSVGElement>) => {
    const { className, ...other } = props
    return (
        <div className={clsx(['lbui-icon-container', className])}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit={2}
                clipRule="evenodd"
                viewBox="0 0 24 24"
                {...other}
            >
                <path d="M16.843 10.211A.75.75 0 0 0 16.251 9H7.75a.75.75 0 0 0-.591 1.212l4.258 5.498a.746.746 0 0 0 1.183-.001l4.243-5.498z" />
            </svg>
        </div>
    )
}