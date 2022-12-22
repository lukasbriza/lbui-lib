import './scss/TemplateName.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { TemplateNameProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'TemplateName'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const TemplateName = forwardRef<any, TemplateNameProps & Props<any>>((props, ref) => {
    const { } = props

    return (
        <></>
    )
})