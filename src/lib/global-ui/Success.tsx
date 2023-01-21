import './Icon.scss'
import React, { SVGProps } from "react"
import clsx from 'clsx'


export const Success = (props: SVGProps<SVGSVGElement>) => {
    const { className, fill, ...other } = props
    return (
        <div className={clsx(['lbui-icon-container', className])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...other}>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
            </svg>
        </div>
    )
}