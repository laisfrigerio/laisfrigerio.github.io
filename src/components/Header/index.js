import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTag = styled.header`
    background-color: transparent;
    height: 60px;
    margin-bottom: 20px;
    width: 100%;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: inherit;
        margin: 0 auto;
        max-width: 1179px;

        li {
            align-items: center;
            display: inline-flex;
            list-style: none;
            padding: 0 5px;

            a {
                color: #4c4c4c;
                font-weight: 600;
                letter-spacing: 1px;
                padding: 8px 10px;
                text-decoration: none;
            }
        
            &.active {
                a {
                    color: #9C27B0;
                }
            }
        
            &:hover {
                a {
                    color: #fff;
                }
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderTag>
            <ul>
                <li className="active">
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/educacao">Educação</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
            </ul>
        </HeaderTag>
    );
};

export default Header;