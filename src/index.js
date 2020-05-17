import "./styles.css";
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';


const Message = props => {

    const {
        text,
        type = 'info',
        onClose,
        style,
        align = 'center'
    } = props;

    const reactMessageBlockStyle = `react-messages ${type}`;

    const textStyle = `text ${align}`;

    return (
        <div className={reactMessageBlockStyle} style={style}>
            <div className={textStyle}>
                {props.children} {text}
            </div>
            {onClose && <div className="close" onClick={onClose}>
                X
            </div>}
        </div>
    )
};

Message.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
};

export default Message;
