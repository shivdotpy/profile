import React, {Component} from 'react';

class Introsection extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center pt-5 text-center">
                        <div className="logo-circle-intro">
                            <img src={require('../../images/logo.png')} height={150} width={150}/>
                        </div>
                    </div>
                    <div className="text-center pt-5 pb-5 intro-text">
                        <h3 style={{fontWeight: 700}}>Hi.</h3>
                        <h5>I am a Full stack developer based in Delhi, India. I have a passion for development for web and mobile devices.</h5>
                    </div>
                    <hr style={{width: '100px'}}/>
                </div>
            </div>
        );
    }
}

export default Introsection;