import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    margin-bottom: 20px;
`;

const H4 = styled.h4`
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
`;

const Table = styled.table`
    th {
        color: #4c4c4c;
        font-size: 12px;
        text-align: left;
    }
    td {
        height: 20px;
        &.skill {
            div {
                display: flex;
                margin: 0 0 0 20px;
                span {
                    background-color: #4c4c4c;
                    border-radius: 50%;
                    height: 10px;
                    width: 10px;
                    &.fill {
                        background-color: #9c27b0;
                    }
                }
                > span:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }
    }
`;

const Progress = (props) => {

    if (props.items.length === 0) {
        return null;
    }

    return (
        <Div className="progress">
            <H4>
                {props.name}
                <div className="divisor"></div>
            </H4>
            <Table>
                <tbody>
                    {props.items.map((item, indexTr) => {
                        return (
                            <tr key={indexTr}>
                                <th className="tech">{item.name}</th>
                                <td className="skill">
                                    <div>
                                        {item.dots.map((dot, indexDot) => (
                                            <span key={indexDot} className={dot.fill ? 'fill' : ''}></span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Div>
    );
};

export default Progress;