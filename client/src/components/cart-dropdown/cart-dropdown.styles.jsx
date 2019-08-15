import styled from 'styled-components';


export const CartDropdownContainer = styled.div`
    border: 1px solid black;
    background: whitesmoke;
    height: 300px;
    width: 200px;

    position: absolute;
    top: 75px;
    right: 10px;
    padding: 20px;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin-bottom: 15px;
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

