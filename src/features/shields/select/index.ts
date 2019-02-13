/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../theme'
import palette from '../../../theme/palette'
import caratUrl from './carat.svg'

export interface SelectBoxProps {
  id?: string
  multiple?: boolean
  autoFocus?: boolean
  disabled?: boolean
  value?: string
  onChange?: (e: any) => void
  children: React.ReactNode
}

export const SelectBox = styled<SelectBoxProps, 'select'>('select')`
  box-sizing: border-box;
  position: relative;
  -webkit-font-smoothing: antialiased;
  border-radius: 3px;
  display: block;
  padding: 6px 12px 6px 6px;
  width: 100%;
  appearance: none;
  min-height: 36px;
  color: #343546;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  font-family: ${p => p.theme.fontFamily.heading};
  border: 1px solid #E9E9F4;
  background: url(${caratUrl}) 98% / 10% no-repeat transparent;
  /* avoid text overflow w/ carat */
  -webkit-padding-start: 10px;
  -webkit-padding-end: 32px;
  outline-color: ${palette.orange400};
  outline-width: 2px;
  cursor: pointer;

  > option {
    color: ${palette.black};
  }

  ${(p: SelectBoxProps) => p.disabled
    ? css`
      user-select: none;
      opacity: 0.25;
    ` : ''
  }
  ${(p: SelectBoxProps) => p.multiple
    ? css`
      padding: 6px;
      background: none;
    ` : ''
  }
`
