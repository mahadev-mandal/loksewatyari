import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import PropTypes from 'prop-types';

Quill.register('modules/imageResize', ImageResize);

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5] }],
        // [{ list: "ordered" }],
        // [{ list: "bullet" }],
        // [{ align: ['', 'center', 'right'] }],
        // [{ color: '' }],
        // [{ background: '' }],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'font': [] }],
        [{ 'header': 1 }, { 'header': 2 }, { 'header': [1, 2, 3, 4, 5, 6,] }],               // custom button values
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        // [{ 'size': ['small', false, 'large', 'huge',] }],  // custom dropdown
        ['clean'],
        ['link', 'image', 'video'],
    ],

    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
}
const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
];

export default function RichTextEditor({ value, onChange }) {
    return <div>
        <ReactQuill theme="snow" formats={formats} value={value} onChange={onChange} modules={modules} />
    </div>
}

RichTextEditor.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}