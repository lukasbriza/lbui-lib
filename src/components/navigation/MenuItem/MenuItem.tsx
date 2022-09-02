import React, { FC } from 'react'
import { MenuItemProps } from './types/model'


export const MenuItem: FC<MenuItemProps> = React.forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
    return (
        <div
            ref={ref}
        >

        </div>
    )
})