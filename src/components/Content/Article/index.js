import styled from 'styled-components';

const Article = styled.article`
    .title {
        color: #fff;
        font-family: 'Press Start 2P',cursive;
        font-size: 11px;
        letter-spacing: 2px;
        line-height: 150%;
        margin-bottom: 10px;
        padding: 5px 0;

        .divisor {
            border-bottom: 4px solid #9c27b0;
            margin-top: 10px;
            width: 35px;
        }

        @media screen and (max-width: 616px) {
            padding-left: 10px;
        }
    }
`;

export default Article;