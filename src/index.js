import "./styles.css";
import React from "react";
import PropTypes from 'prop-types';

const Message = props => {

    const {
        text,
        type = 'info',
        showIcon = true,
        onClose,
        style
    } = props;


    const reactMessageBlockStyle = `react-messages ${type}`

    return (
        <div className={reactMessageBlockStyle} style={style}>
            {showIcon && <div className="icon">
                I
            </div>}
            <div className="text">
                {text}
            </div>
            {onClose && <div className="close" onClick={onClose}>
                X
            </div>}
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
};

export default Message;
