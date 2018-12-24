import React, {Component} from 'react';

class Namesection extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#bbdefb'}}>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-8 text-center">
                            <h1 className="name-text text-right">I am shiv .</h1>
                        </div>
                        <div className="col-md-4 cloudImage text-right">
                            <img src="http://seanhalpin.io/assets/img/ui/cloud.svg" alt=""/>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-4">
                            <img src="http://seanhalpin.io/assets/img/ui/cloud.svg" alt=""/>
                        </div>
                        <div className="col-md-8 pl-5">
                            <h5>Full Stack Developer</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Namesection;