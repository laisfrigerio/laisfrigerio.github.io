import React from 'react';
import styled from 'styled-components';

import AuthorPicture from "./Author/Picture";
import AuthorDescription from "./Author/Description";
import AuthorSocialMedia from "./Author/SocialMedia";
import AuthorSummary from "./Author/Summary";

const AsideTag = styled.aside`
    width: 200px;
`;

const Aside = () => {
    return (
        <AsideTag>
            <AuthorPicture />
            <AuthorDescription />
            <AuthorSocialMedia />
            <AuthorSummary />
        </AsideTag>
    );
};

export default Aside;