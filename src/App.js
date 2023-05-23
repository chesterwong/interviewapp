import React from 'react';
import MenuArea from './components/MenuArea';
import HeaderArea from './components/HeaderArea';
import ContentArea from './components/ContentArea';

import { Layout } from 'antd';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#15191d',
};
const contentStyle = {
  textAlign: 'left',
  backgroundColor: '#ffffff',
};
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <MenuArea msg={()=>this.changMenuName()}/>
      <Layout>
        <Header style={headerStyle}>
          <HeaderArea/>
        </Header>
        <Content style={contentStyle}>
          <ContentArea/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
