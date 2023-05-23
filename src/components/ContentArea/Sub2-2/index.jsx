import React, { Component } from 'react';
import { Input ,Button } from 'antd';
import { nanoid } from 'nanoid';
import store from "../../../redux/store"
import '../index.css'

class Sub0202 extends Component {
    state = {
        value:"Sub2-2"
    }

    onchangInput = () => {
        this.setState({value: "Sub2-2编辑后"});
        store.dispatch({type:"menuChange", data: {menuId:"sub2-2",menuName:"编辑后"} });
    }

    render() {
        const { value } = this.state;
        return (
            <>
                <div>
                    <Input value={value} id={"SubPage_"+nanoid()} className='content_input'/> <Button type="primary" onClick={this.onchangInput}>保存</Button>
                </div>
            </>
        );
    }
}

export default Sub0202;