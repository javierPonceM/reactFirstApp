import React from 'react';
import './leftSide.css';
import DocExample from '../docExample/docExample';

const liDocs = [["ine", "INE"], ["licManejo", "Licencia de manejo CDMX"],
["pasaporte", "Pasaporte"], ["formMigrat", "Forma migratoria mx"], ["reciTelmex", "Recibo de telmex"],
["reciAxtel", "Recibo de axtel"], ["reciCfe", "Recibo de cfe"], ["reciAgua", "Recibo de agua"],
["reciPredial", "Recibo de predial"], ["dni", "DNI"]];

class LeftSide extends React.Component {
    constructor(props){
        super(props);
        this.hoverDocLi = this.hoverDocLi.bind(this);
        this.leaveDocLi = this.leaveDocLi.bind(this);
    }

    createLis(array) {
        return array.map((elm, index) =>
            <li key={index} onMouseOver={(e) => this.hoverDocLi(`${elm[0]}Example`, e)}
                onMouseLeave={(e) => this.leaveDocLi(`${elm[0]}Example`, e)}>
            {elm[1]}
            </li>
        );
         
    }

    createDocsExamples(array) {
        return array.map((elm) =>
            <DocExample name={elm[0]} ref={elm[0]+"Example"} />
        );
         
    }


    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-4">
                <center>
                    <div className="secondBlock">
                        <h5>Documentos detectados</h5>
                        <ol id="docsDetectados">
                            {this.createLis(liDocs)}
                        </ol>
                    </div>
                    <div className="firsBlock" >
                        <h5>Formatos admitidos</h5>
                        <ul id="formtAdmitidos">
                            <li>jpg</li>
                            <li>jpeg</li>
                            <li>pdf</li>
                            <li>png</li>
                            <li>tif</li>
                        </ul>
                    </div>
                </center>
                
                {this.createDocsExamples(liDocs)}

            </div>
        );
    }

    hoverDocLi(doc, e) {
        let elmt = this.refs[doc].docExample.current;
        elmt.style.display = "block";

    }

    leaveDocLi(doc, e) {
        let elmt = this.refs[doc].docExample.current;
        elmt.style.display = "none";
    }
}

export default LeftSide;

