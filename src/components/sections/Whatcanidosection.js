import React, {Component} from 'react';

class Whatcanidosection extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5 pb-5">
                    <div className="text-center">
                        <h2 style={{fontWeight: 700}}>What I can do .</h2>
                        <div className="row pt-2 pb-2">
                            <div className="col-md-6 text-center">
                                <img src={require('../../images/archi.png')} alt="" height={200} width={200}/>
                            </div>
                            <div className="col-md-6 text-left whatyouwant">
                                <h4>Design what you want</h4>
                                <p>I like to keep it simple. My goals are to focus on typography, content and conveying
                                    the message that you want to send.</p>
                            </div>
                        </div>
                        <div className="row pt-2 pb-2">
                            <div className="col-md-6 text-left whatyouwant">
                                <h4>Develop what you need</h4>
                                <p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>

                            </div>
                            <div className="col-md-6 text-center">
                                <img src={require('../../images/archi2.jpg')} alt="" height={200} width={400}/>
                            </div>
                        </div>

                    </div>
                    <hr style={{width: '100px'}}/>
                </div>
            </div>
        );
    }
}

export default Whatcanidosection;