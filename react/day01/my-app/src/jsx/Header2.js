import React from 'react';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           arr: [['推荐','热点','娱乐','汽车','体育','时尚','历史','育儿','探索'],
            ['新闻','视频','图片','军事','体育','NBA','娱乐','财经','科技'],
            ['CBA','明星','理财','数码','健康','车型','家居','课程','大家']]
 
        }
    }
    dif(obj){
        if(obj.email){
            return <a className='email'></a>
        }else if (obj.ham) {
            return <a className='ham'></a>            
        }else{
            return <a className='back'></a>            
        }
    }
  
    render() {
        return(
         <header>
                <div className='left'>
                   {this.dif(this.props.obj)}
                </div>
                <div className='center'>今日头条</div>
                <div className='right'><a></a></div>
                
        </header>
        )
    }
}

export default Header