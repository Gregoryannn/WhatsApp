import styled from "styled-components";
import { Button } from '@material-ui/core'

export const Wrap = styled.div`
    background-color: #f8f8f8;
    height: 90vh;
    width: 90vw;
    display: grid;
    place-items: center;
`
export const Container = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px;
`
export const Img = styled.img`
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
`

export const TextWrap = styled.div``

export const ButtonIcon = styled(Button)`
    margin-top: 5vh !important;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white !important;
`; 