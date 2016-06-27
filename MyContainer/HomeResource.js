import React from 'react';
import { XBApi } from 'xb-common-lib';

export default class HomeResource extends React.Component {
    render(){
        const xb = new XBApi();
        return (
            <div>
                <div>{ xb.user().get('name') }' lyrics of the day</div>
                <br/>
                <div>
                    I, I, I, I. I hope<br/>
                    Do you wanna let go?<br/>
                    Do you wanna this time?<br/>
                    I hope you wanna let go<br/>
                    Cause this is home<br/>
                </div>
            </div>
        );
    }
}
