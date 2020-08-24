import Styled from 'styled-components'
import { IMaskInput } from 'react-imask'

export const StyledLabel = Styled.span`
    font-size: 16px;
    color: ${props => props.color}
`
export const StyledCitizenIdInput = Styled(IMaskInput)`
    box-sizing: border-box !important;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;

    &:focus {
        border-color: #40a9ff;
        border-right-width: 1px !important;
        outline: 0;
        -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }

    &::-webkit-input-placeholder {
        color: #d9d9d9;
      }
`