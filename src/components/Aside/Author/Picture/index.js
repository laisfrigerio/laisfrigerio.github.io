import React from 'react';
import styled from 'styled-components';

import Flex from "../../../Flex";
import avatar from "./svg/avatar.jpg";
import CloudSVG from "./svg/cloud.svg";

const Figure = styled.figure`
    position: relative;
    svg {
        height: 150px;
        left: -22px;
        position: absolute;
        top: -70px;
        width: 150px;
        z-index: -1;

        * { fill: #363636; }
    }
    img {
        height: 95px;
        width: 95px;

        &.picture {
            border: 3px solid #9c27b0;
            box-shadow: 0 0 20px 0 #191818;
            height: 100px;
            margin-bottom: 20px;
            width: 100px;

            &.circle {
                border-radius: 50%;
            }
        }
    }
`;

const AuthorPicture = () => {
    return (
        <Flex className="align-items center flex-direction column">
            <Figure>
                <CloudSVG />
                <img className="picture circle" src={avatar} alt="Imagem de Rosto da autora do Portfolio"/>
            </Figure>
        </Flex>
    );
};

export default AuthorPicture;