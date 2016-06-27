import React from 'react';
import { VariantRenderer } from 'xb-common-lib';

export default class HomeResource extends VariantRenderer {
    render(){
        return (
            <div>
                <div>{ this.XB.user().get('name') }' lyrics of the day</div>
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
