import styled from 'styled-components';

const Flex = styled.div`
    display: flex;

    &.align-items {
        &.center {
            align-items: center;
        }
    }

    &.flex-direction {
        &.column {
            flex-direction: column;
        }
    }

    &.mb-20 {
        margin-bottom: 20px;
    }
`;

export default Flex;