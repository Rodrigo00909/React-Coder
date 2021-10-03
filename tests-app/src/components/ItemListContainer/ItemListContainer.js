import React from 'react';
import styled from 'styled-components';

export const ItemListContainer = ({mensaje}) => {

    const ItemListDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

    .ItemList-center {
        margin-top: 2rem;
        width: 90vw;
        max-width: 1300px;
    }
    `;

    return (
        <ItemListDiv>
            <div className="ItemList-center">
                Historial::: {mensaje}
            </div>
        </ItemListDiv>
    )
}
