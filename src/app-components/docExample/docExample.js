import React from 'react';
import './docExample.css';

class DocExample extends React.Component {

    constructor(props) {
        super(props);
        // Crea una referencia para almacenar el elemento docsExample del DOM
        this.docExample = React.createRef();
    }

    render() {

        return (
            <img
                src={name(this.props.name)}
                className="docExample"
                ref={this.docExample}
                alt="imagen ejemplo del documento">
            </img>
        );
        function name(nombre) {
            return `./images/${nombre}.jpg`;
        }
    }
}

export default DocExample;

