import React from 'react';
import styled from 'styled-components';

import Flex from "../../../Flex";
import Logo from "./svg/glasses.svg";
import MailSVG from "./svg/mail.svg";

const H1 = styled.h1`
    color: #fff;
    font-size: 20px;
    margin-bottom: 5px;

    &.logo {
        align-items: center;
        display: flex;
        flex-direction: column;

        svg {
            height: 30px;
            margin-bottom: 0;
            width: 40px;

            * { fill: #9c27b0; }
        }
    }
`;

const H2 = styled.h2`
    color: #4c4c4c;
    font-size: 12px;
`;

const Email = styled.div`
    color: #9c27b0;
    margin-top: 5px;
    * { 
        font-size: 10px; 
        font-weight: bold;
    }
    svg {
        height: 15px;
        margin-right: 5px;
        width: 15px;
        * { fill: #4c4c4c; }
    }
`;

const AuthorDescription = () => {
    return (
        <Flex className="align-items center flex-direction column name mb-20">
            <H1 className="title-01 logo">
                <Logo />
                Lais Frigério
            </H1>
            <H2 className="title-02 logo">Software Developer</H2>
            <Email className="title-04">
                <Flex className="align-items center">
                    <MailSVG />
                    laaisfrigerio@gmail.com
                </Flex>
            </Email>
        </Flex>
    );
};

export default AuthorDescription;