import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    position: relative;
    width: calc(100% - 25px);

    &:not(last-child):after {
        border-left: 1px dashed #9c27b0;
        bottom: -25px;
        content: "";
        left: -10px;
        position: absolute;
        top: 5px;
    }

    &:before {
        background-color: #9c27b0;
        border: 2px solid #9c27b0;
        border-radius: 50%;
        content: "";
        height: 7px;
        left: -15px;
        position: absolute;
        top: 5px;
        width: 7px;
    }

    .item {
        border-radius: 5px;
        color: #4c4c4c;
        background-color: #222;
        margin: 0 0 10px 10px;
        padding: 10px;
        position: relative;
        width: 100%;

        small strong { font-size: 11px; }
        small { font-size: 10px; }

        h4 {
            color: #9c27b0;
        }

        .ul-list {
            list-style: initial;
            margin: 20px 0 10px 20px;
            li {
                line-height: 150%;
                margin-bottom: 5px;
            }
        }
    }
`;

const TimelineItem = (props) => {
    return (
        <Item className="timeline-item">
            <div className="item">
                <div>
                    <small>
                        {props.subtitle}<strong>{props.place}</strong>
                    </small>
                    <h4>{props.title}</h4>
                </div>
                {props.children}
            </div>
        </Item>
    );
};

export default TimelineItem;