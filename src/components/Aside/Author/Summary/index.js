import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    color: #4c4c4c;
    font-size: 12px;
    line-height: 150%;
    margin: 0 0 20px;
    text-align: center;
`;

const AuthorSummary = () => {
    return (
        <P>
            Olá, meu nome é Lais, tenho 24 anos e sou formada em Análise e Desenvolvimento de Sistemas pela UFPR com <strong>MELHOR</strong>  índice de desempenho acadêmico. Atualmente estou cursando minha primeira Especialização em Engenharia de Software pela mesma instituição. Sou apaixonado por futebol, tendo o <strong>CORITIBA</strong>  como o time do coração.
        </P>
    );
};

export default AuthorSummary;