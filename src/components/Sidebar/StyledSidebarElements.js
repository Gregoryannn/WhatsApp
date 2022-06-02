import styled from 'styled-components';
import { SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export const Container = styled.div`
    flex: 0.35;
    display: flex;
    flex-direction: column;
`
export const HeaderWrap = styled.div`
display: flex;
justify - content: space - between;
padding: 20px;
border - right: 1px solid lightgray;
`
export const HeaderRight = styled.div`
display: flex;
align - items: center;
justify - content: space - between;
min - width: 10vw;
`
    `;
export const ButtonWrap = styled(IconButton)`

`
export const MoreVertIcon = styled(MoreVert)`
margin - right: 2vw;
font - size: 24px!important;
`;

export const SearchbarWrap = styled.div`
display: flex;
align - items: center;
background - color: #f6f6f6;
height: 39px;
padding: 10px;

`
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
`
export const SearchOutlinedIcon = styled(SearchOutlined)`
color: gray;
padding: 10px;
`;

export const SearchInput = styled.input`
    border: none;
    outline-width: 0;
    margin-left: 10px;
`
export const ChatContainer = styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;
`

export const ChatCard = styled.div`
display: flex;
padding: 20px;
cursor: pointer;
border - bottom: 1px solid #f6f6f6;
    &:hover {
    background - color: #ebebeb;
}
`

export const ChatCardInfo = styled.div`
margin - left: 15px;
    h2 {
    font - size: 16px;
    margin - bottom: 8px;
}
