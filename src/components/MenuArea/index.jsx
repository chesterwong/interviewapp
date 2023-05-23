import React, { Component } from 'react';
import { Layout } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

import { Button, Menu } from 'antd';

import LogoImg from "../../assets/images/logo.png"
import { NavLink } from 'react-router-dom';
import store from "../../redux/store"
const siderStyle = {
    textAlign: 'center',
    lineHeight: '40px',
    color: '#fff',
    backgroundColor: '#15191d',
  };

  
class MenuArea extends Component {
    state = {
        collapsed:false,
        items:[
        
        this.getItem('菜单一', 'sub1', "", [
            this.getItem(<NavLink to="/sub1-1" id="sub1-1">子菜单1-1</NavLink>, 'sub1-1'),
            this.getItem(<NavLink to="/sub1-2" id="sub1-2">子菜单1-2</NavLink>, 'sub1-2'),
        ]),
        
        this.getItem('菜单二', 'sub2', "", [
            this.getItem(<NavLink to="/sub2-1" id="sub2-1">子菜单2-1</NavLink>, 'sub2-1'),
            this.getItem(<NavLink to="/sub2-2" id="sub2-2">子菜单2-2</NavLink>, 'sub2-2'),
        ]),
        ]
    }

    getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
    }
    toggleCollapsed = () => {
        this.setState({collapsed: !this.state.collapsed});
    };

    changeMenuTitle = () => {
        const {menuId, menuName} = store.getState();
        const e_selectedMenu = document.getElementById(menuId);

        if (menuName === '' || !menuName) {
            return;
        }
        if (e_selectedMenu && e_selectedMenu.innerHTML.indexOf("编辑后") < 0) {
            e_selectedMenu.innerHTML = e_selectedMenu.innerHTML + menuName
        }
       
    }

    render() {
        const {Sider} = Layout;
        this.changeMenuTitle();
        return (
            <>
                <div >
                    <Sider style={siderStyle} collapsed={this.state.collapsed}>
                    <ul>
                        <li>
                            <img src={LogoImg} alt="logo" style={{width:30}}/>
                            <span>React</span>
                        </li>
                    </ul>
                    <Button type="primary" onClick={this.toggleCollapsed}>
                        {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultOpenKeys={['sub1','sub2']}
                        mode="inline"
                        theme="dark"
                        items={this.state.items}
                    />
                    
                    </Sider>
                </div>
            </>
        );
    }
}

export default MenuArea;