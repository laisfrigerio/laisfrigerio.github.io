import React from 'react';
import styled from 'styled-components';

import Facebook from "./svg/facebook.svg";
import Github from "./svg/github.svg";
import Instagram from "./svg/instagram.svg";
import Linkedin from "./svg/linkedin.svg";

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        svg {
            height: 20px;
            margin-right: 5px;
            width: 20px;
        }
    }
`;

const AuthorSocialMedia = () => {
    return (
        <Div>
            <a href="https://www.facebook.com/lais.frigerio" title="Link para a página pessoal do facebook">
                <Facebook />
            </a>

            <a href="https://github.com/laisfrigerio" title="Link para a página o repositório do Github">
                <Github />
            </a>

            <a href="https://www.instagram.com/laisfrigerio/" title="Link para a página pessoal do Instagram">
                <Instagram />
            </a>

            <a href="https://www.linkedin.com/in/lais-frig%C3%A9rio-594720146/" title="Link para a página perfil do Linkedin">
                <Linkedin />
            </a>
        </Div>
    );
};

export default AuthorSocialMedia;