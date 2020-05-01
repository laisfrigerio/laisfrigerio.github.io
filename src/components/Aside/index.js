import React from 'react';
import styled from 'styled-components';
import { skills, languages } from "./config";

import AuthorPicture from "./Author/Picture";
import AuthorDescription from "./Author/Description";
import AuthorSocialMedia from "./Author/SocialMedia";
import AuthorSummary from "./Author/Summary";
import Progress from "./Progress";

const AsideTag = styled.aside`
    width: 200px;
    @media screen and (max-width: 616px) {
        width: 100%;
    }
`;

const Flex = styled.div`
    padding: 0 10px;
    @media screen and (max-width: 616px) {
        display: flex;
        justify-content: space-around;
    }
    @media screen and (max-width: 412px) {
        flex-direction: column;
    }
`;

const Aside = () => {

    return (
        <AsideTag>
            <AuthorPicture />
            <AuthorDescription />
            <AuthorSocialMedia />
            <AuthorSummary />
            <Flex>
                <Progress name="Habilidades" items={skills} />
                <Progress name="Idiomas" items={languages} />
            </Flex>
        </AsideTag>
    );
};

export default Aside;