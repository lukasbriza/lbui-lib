import './TemplateName.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { TemplateNameProps } from './model'
import { Props } from '../../../utils'

const COMP_PREFIX = 'TemplateName'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const TemplateName = forwardRef<any, TemplateNameProps & Props<any>>((props, ref) => {
    const { } = props

    return (
        <></>
    )
})