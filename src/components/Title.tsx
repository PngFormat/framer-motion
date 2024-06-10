import React from 'react';
import PropTypes from 'prop-types';
import '../styles/title.css';

// @ts-ignore
const BigHeader = ({ title, subtitle }) => {
    return (
        <div className="big-header">
            <h1 className="big-header-title">{title}</h1>
            {subtitle && <p className="big-header-subtitle">{subtitle}</p>}
        </div>
    );
};

BigHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default BigHeader;
