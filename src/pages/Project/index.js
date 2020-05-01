import React from 'react';

import Article from "../../components/Content/Article";
import Section from "../../components/Content/Section";
import Timeline from "../../components/Content/Timeline";
import TimelineItem from "../../components/Content/TimelineItem";

import ImageTretisOne from "./images/js-tetris-game-2.png";

const ProjectPage = () => {
    return (
        <Section>
            <Article>
                <h4 className="title">
                    Projetos
                    <div className="divisor"></div>
                </h4>
            </Article>
            <Timeline>
                <TimelineItem 
                    title="Tretis Game"
                    subtitle="JS + Canvas"
                >
                    <ul className="ul-list">
                        <li>
                            Desenvolvimento jogo Tretis com Javascript;
                        </li>
                        <li>
                            Para jogar clique <a className="link" target="_blank" href="https://laisfrigerio.github.io/js-tetris-game/">aqui</a>
                        </li>
                        <li>
                            Github repositório <a className="link" target="_blank" href="https://github.com/laisfrigerio/js-tetris-game">https://github.com/laisfrigerio/js-tetris-game</a>
                        </li>
                    </ul>

                    <img className="img-fluid" src={ImageTretisOne} alt="Imagem do quadro de jogo do tetris" title="Imagem do quadro de jogo do tetris"></img>
                </TimelineItem>
                <TimelineItem
                    title="Clínica Life App"
                    subtitle="Java + Swing + JDBC + MySQL"
                >
                    <ul className="ul-list">
                        <li>
                            Aplicação para desktop para gerenciamento de uma clínica de fisioterapia e estética;
                        </li>
                        <li>
                            Desenvolvido com JAVA + Swing, Banco de dados MySQL
                        </li>
                        <li>
                            Github repositório <a className="link" target="_blank" href="https://github.com/laisfrigerio/ClinicaLifeApp">https://github.com/laisfrigerio/ClinicaLifeApp</a>
                        </li>
                    </ul>
                    <img className="img-fluid" src="https://raw.githubusercontent.com/laisfrigerio/ClinicaLifeApp/master/screens/agenda.png" alt="Imagem da tela agenda do software para uma clínica" title="Imagem da tela agenda do software para uma clínica"></img>
                </TimelineItem>
            </Timeline>
        </Section>
    );
};

export default ProjectPage;