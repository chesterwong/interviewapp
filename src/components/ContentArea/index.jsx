import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sub0101 from './Sub1-1';
import Sub0102 from './Sub1-2';
import Sub0201 from './Sub2-1';
import Sub0202 from './Sub2-2';

class Content extends Component {
    state = {
    }

    render() {
        return (
            <>
                <div>
                    <Routes>
                        <Route path="/sub1-1" element={<Sub0101/>}/>
                        <Route path="/sub1-2" element={<Sub0102/>}/>
                        <Route path="/sub2-1" element={<Sub0201/>}/>
                        <Route path="/sub2-2" element={<Sub0202/>}/>
                    </Routes>
                </div>
            </>
        );
    }
}

export default Content;