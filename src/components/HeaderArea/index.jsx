import React, { Component } from 'react';
import {
    QuestionCircleOutlined
} from '@ant-design/icons';

import './index.css'

class Header extends Component {
    state = {
    }

    render() {
        return (
            <>
                <div className='ctr_header'>
                    <QuestionCircleOutlined /> admin
                </div>
            </>
        );
    }
}

export default Header;