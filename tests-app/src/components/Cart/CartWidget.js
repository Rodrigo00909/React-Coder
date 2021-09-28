import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    const CartContainer = styled.div`
    
    .nav-cart-icon {
        font-size: 25px;
        color: #4c3832;

        &:hover {
            color: #717171;
        }
    }
    `;

    return (
        <div>
            <CartContainer className="nav-cart"><FaShoppingCart className="nav-cart-icon" /></CartContainer>
        </div>
    )
}
