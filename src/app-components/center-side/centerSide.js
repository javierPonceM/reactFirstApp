import React from 'react';
import './centerSide.css';

class CenterSide extends React.Component {
    imgPublic = "https://previews.123rf.com/images/makc76/makc761602/makc76160200002/52590756-el-hombre-de-negocios-est%C3%A1-analizando-el-compo-usando-la-lupa-para-ver-el-texto-peque%C3%B1o.jpg";
    constructor(props) {
        super(props);
        this.state = {
            imageClassName: "imgAnalisis",
            initialImg: this.imgPublic,
        }
        this.analizeDoc = this.analizeDoc.bind(this);
    }

    fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/x-png',
        'application/pdf',
        'image/tiff'
    ];

    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-4">
                <img className={this.state.imageClassName} ref="imgAnalisis"
                    src={this.state.initialImg}
                    alt="" />
                <p ref="descriptionImg"></p>
                <div className="formulario">
                    <center>

                        <form encType="multipart/form-data" action="analisis" method="post" 
                        id="form1" onSubmit={ this.analizeDoc} ref="form1">

                            <label htmlFor="inputFile" id="inputLabel"><span>Seleccionar archivo</span></label>
                            <input type="file" name="inputFile" className="inputFile" id="inputFile"
                                placeholder="compo" onChange={(e) => this.changeStsInput(this, e)} ref="inputF" />
                            <br />
                            <button type="submit" className="btn btn-primary submitButton">Analizar</button>
                        </form>
                    </center>

                </div>
            </div>
        );
    }

    changeStsInput(comp, e) {
        let para = comp.refs.descriptionImg;
        let image = comp.refs.imgAnalisis;
        console.log(comp);
        let input = comp.refs.inputF;
        while (image.src !== this.imgPublic) {
            //mala praactica, pero estoy probando react
            image.className = "imgAnalisis";
            image.src = this.imgPublic;
            para.textContent = "";
        }

        var curFiles = input.files;
        console.log(curFiles);
        if (curFiles.length > 0) {
            if (this.validFileType(curFiles[0])) {
                if (curFiles[0].type === 'application/pdf' || curFiles[0].type === 'image/tiff') {
                    para.textContent = curFiles[0].name + ', Tamaño: ' + this.returnFileSize(curFiles[0].size);
                    var pdfEmbebido = <iframe title="visualizacion de pdf"></iframe>
                    pdfEmbebido.src = (window.webkitURL || window.URL).createObjectURL(curFiles[0]);
                    pdfEmbebido.type = "application/pdf";
                    pdfEmbebido.width = "50%";
                    pdfEmbebido.height = "50%";
                    para.appendChild(pdfEmbebido);
                    para.appendChild(para);
                } else {
                    para.textContent = curFiles[0].name + ', Tamaño: ' + this.returnFileSize(curFiles[0].size);
                    image.className = "archivo";
                    image.src = window.URL.createObjectURL(curFiles[0]);

                }
            } else {
                para.textContent = 'El archivo no tiene un formato valido. Seleccione otro con formato aceptado, vea la lista.';
            }
        }
    }

    validFileType(file) {
        for (var i = 0; i < this.fileTypes.length; i++) {
            if (file.type === this.fileTypes[i]) {
                return true;
            }
        }
        return false;
    }

    returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    analizeDoc(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
}

export default CenterSide;

