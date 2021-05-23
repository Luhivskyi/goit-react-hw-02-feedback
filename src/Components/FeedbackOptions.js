import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleClickButton }) => (
    
    <>
        {options.map(elem => (

            <button key="elem" onClick={() => handleClickButton(elem)}>{elem }</button>
            
        ))}
    </>


)

FeedbackOptions.propTypes = {
   options: PropTypes.string.isRequired,
  handleClickButton: PropTypes.func.isRequired,
};


export default FeedbackOptions;