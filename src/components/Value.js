import React from 'react';
import PropTypes from 'prop-types';

const Value = props => {
    return (
        <div>
            <h1> { props.number } </h1>
        </div>
    );
};

Value.propTypes = {
    number: PropTypes.number
};

Value.defaultProps = {
    number: -1
};

export default Value;