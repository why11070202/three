import React from 'react';
import '../css/Header.css';
import '../Iconfont/iconfont.css'
class Header extends React.Component {
    constructor(porps){
        super(porps);
 
    }
    render(){
        return (
            <div className="header">
                <div className="h_l">
                    <img src='http://stu.1000phone.net/Public/assets/css/images/logo.png?1565695884'></img>
                </div>
                <div className="h_r">
                    <a>武红艳
                        <i className="iconfont  icon-xialajiantou"></i>
                    </a>
                </div>
            </div>
        )
    }
}
export default Header