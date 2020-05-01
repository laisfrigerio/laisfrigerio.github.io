import React from 'react';
import styled from 'styled-components';

import Section from "../../components/Content/Section";
import Timeline from "../../components/Content/Timeline";
import TimelineItem from "../../components/Content/TimelineItem";

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

const IndexPage = () => {
    return (
        <Section>
            <Article>
                <h4 className="title">
                    Experiência Profissional
                    <div className="divisor"></div>
                </h4>
            </Article>
            <Timeline>
                <TimelineItem 
                    title="Analista de Sistemas Júnior"
                    period="Dezembro/2018 - Atualmente"
                    place=", Editora Gazeta do Povo"
                >
                    <ul className="ul-list">
                        <li>
                            Desenvolvimento e manutenção do portal Gazeta do Povo e de seus verticais (viver-bem, haus, bom-gourmet, sempre família) com foco no front-end;
                        </li>
                        <li>
                            Desenvolvimento da nova identidade visual do portal com foco no SEO, UX (User Experience) e implementação das páginas AMP (Accelerated Mobile Pages);
                        </li>
                        <li>
                            Desenvolvimento e manutenção de sistemas internos, como backoffice's (CMS - Publicador de matérias, Festival Bom Gourmet).
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    title="Desenvolvedora Júnior / PHP Backend"
                    period="Janeiro/2018 - Novembro/2018"
                    place=", Agência Polvo"
                >
                    <ul className="ul-list">
                        <li>
                            Promovida à desenvolvedora junior responsável por conceber API’s com o framework Laravel e integrar com aplicações desenvolvidas com o framework React JS;
                        </li>
                        <li>
                            Líder do projeto denominado “PreviNEO” atuando junto com o gerente da equipe na análise e definição de requisitos, estimativas de horas e alocação de recursos.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    title="Estágiária / PHP Backend"
                    period="Outubro/2017 - Dezembro/2017"
                    place=", Agência Polvo"
                >
                    <ul className="ul-list">
                        <li>
                            Manutenção de aplicações web desenvolvidas com o framework Polvo.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    title="Pesquisadora"
                    period="Outubro/2017 - Dezembro/2017"
                    place=", C3SL - Centro de Computação Científica e Software Livre"
                >
                    <ul className="ul-list">
                        <li>
                            Desenvolvimento de aplicações multi plataforma, open source para o governo brasileiro utilizando tecnologias como C/C++, cmake, LibCurl, LibBoost;
                        </li>
                        <li>
                            Já para o gerenciamento dos projetos, utilizamos Git (GitLab).
                        </li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </Section>
    );
};

export default IndexPage;