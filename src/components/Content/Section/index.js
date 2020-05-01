import styled from 'styled-components';

const Section = styled.section`
    width: calc(100% - 200px);
    padding-left: 20px;
    margin-left: 20px;

    @media screen and (max-width: 616px) {
        margin-left: 0;
        padding-left: 0;
        width: 100%;
    }
`;

export default Section;