import React from 'react';

import Article from "../../components/Content/Article";
import Section from "../../components/Content/Section";
import Timeline from "../../components/Content/Timeline";
import TimelineItem from "../../components/Content/TimelineItem";

const EducationPage = () => {
    return (
        <Section>
            <Article>
                <h4 className="title">
                    Educação
                    <div className="divisor"></div>
                </h4>
            </Article>
            <Timeline>
                <TimelineItem 
                    title="Especialização em Engenharia de Software, UFPR"
                    subtitle="Março/2019 - Outubro/2020"
                >
                    <ul className="ul-list">
                        <li>
                            Desenvolvimento de software com o foco na linguagem de programação JAVA tanto para web quanto para dispositivos móveis utilizando como metodologia métodos ágeis;
                        </li>
                        <li>
                            Curso aberto para a aprendizagem de novas tecnologias, como o framework javascript Angular 8 e Flutter para dispositivos móveis.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    title="Superior em Análise e Desenvolvimento de Sistema, UFPR"
                    subtitle="Concluído em Dezembro/2017"
                >
                    <ul className="ul-list">
                        <li>
                            Análise, definição e documentação de requisitos;
                        </li>
                        <li>
                            Avaliação e concepção de banco de dados;
                        </li>
                        <li>
                            Desenvolver e manter sistemas financeiros e administrativos;
                        </li>
                        <li>
                            Desenvolvimento mobile e web.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    title="Ensino Técnico em Informática, Opet"
                    subtitle="Concluído em Dezembro/2014"
                >
                    <ul className="ul-list">
                        <li>
                            Introdução banco de dados utilizando o gerenciador de banco de dados MySQL;
                        </li>
                        <li>
                            Introdução ao sistema web (HTML/CSS);
                        </li>
                        <li>
                            Introdução à programação funcional em C++ e programação orientada a objetos;
                        </li>
                        <li>
                            Desenvolvimento de aplicações desktop em Java.
                        </li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </Section>
    );
};

export default EducationPage;