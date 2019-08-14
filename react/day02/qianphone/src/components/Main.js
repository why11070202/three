import React from 'react';
import '../css/Main.css';

import {  Menu,Icon, Button } from 'antd';
const { SubMenu } = Menu;

class Main extends React.Component {
    constructor(porps){
        super(porps);
         this.state = {
            collapsed: false,
            list1:['匿名投诉','技术问题','项目上传','VIP','学员周报','学员周报','交费明细','参加考试','学员评价','教学测评'],
            list2:['学员请假','学员违纪']
          };
    }
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    rfor(arr){
        return arr.map((item,index)=>
            <Menu.Item key={index}>{item}</Menu.Item>    
        )
    }
    render(){
        return (
            <div className="main">
                <div className="m_l">
                <div style={{ width: 190 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
         
          
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>学员后台</span>
              </span>
            }
          >
              {this.rfor(this.state.list1)}
           
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>学员考勤</span>
              </span>
            }
          >
              {this.rfor(this.state.list2)}
           
          </SubMenu>
        </Menu>
      </div>
                </div>
                <div className="m_r">
                 
                   
                </div>
            </div>
        )
    }
}
export default Main