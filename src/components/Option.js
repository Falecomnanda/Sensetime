import React from 'react';
import PropTypes from "prop-types";

const Option = props => {
    return (
    <option className="form-control">{props.selection}</option>
    )
}

Option.propTypes = {
    selection: PropTypes.object
}

export default Option;
