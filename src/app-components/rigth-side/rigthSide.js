import React from 'react';
import './rigthSide.css';

class RigthSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info,
            showCard: "none"
        }
    }

    render() {

        return (
            <div className="col-sm-12 col-md-12 col-lg-4">

                <div className="card">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.info.document}</h5>
                        <ul class="list-group list-group-flush">
    <li classNAme="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
                        <p className="card-text">{this.state.info.dataFound}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div> */}
                </div>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
export default RigthSide;



