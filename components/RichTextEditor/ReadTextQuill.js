import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

function ReadTextQuill({ value }) {
  return (
    <ReactQuill
      value={value}
      readOnly={true}
      theme={"bubble"}
    />
  )
}

ReadTextQuill.propTypes = {
  value: PropTypes.string,
}
export default ReadTextQuill