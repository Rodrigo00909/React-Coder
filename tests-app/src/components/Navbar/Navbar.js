import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";

import {ReactComponent as LogoRoma} from './logoroma.svg';


export const Navbar = () => {
    const NavContainer = styled.nav`
        margin-top: 1rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .nav-center {
            width: 90vw;
            margin: 0 auto;
            max-width: 1300px;
        }

        .nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-logo {
            height: 15vmin;
            width: 40vmin;
        }

        .nav-items {
            display: flex;
            align-items: center;
            justify-content: space-around;

            a {
                margin: 50px;
                list-style: none;
                text-decoration:none;
                color: #4c3832;
                font-weight: 700;

                &:hover {
                    color: #717171;
                }
            }
        }

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
            <NavContainer>
                <div className="nav-center">
                    <div className="nav-header">
                        <LogoRoma className="nav-logo" />  
                        <div className="nav-items">
                            <a href="#">Home</a>
                            <a href="#">Products</a>
                            <a href="#">About Us</a>
                        </div>
                        <div className="nav-cart"><FaShoppingCart className="nav-cart-icon" /></div>
                    </div>
                </div>
            </NavContainer>
        </div>
    )
}
