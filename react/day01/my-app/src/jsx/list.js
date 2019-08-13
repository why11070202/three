import React from 'react';
import '../jsx/list.css'
class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           arr: [['推荐','热点','娱乐','汽车','体育','时尚','历史','育儿','探索'],
            ['新闻','视频','图片','军事','体育','NBA','娱乐','财经','科技'],
            ['CBA','明星','理财','数码','健康','车型','家居','课程','大家']]
 
        }
    }

   li(num){
       return this.state.arr[num].map(function(item,index){
        return (<li key={index}>{item}</li>)
       })
   }
    render() {
        return(
            <div>
         <div className="list">
             <ul >
                {this.li(this.props.num)}
            </ul>
            
        </div>
        <div className="right">
                <a>+</a>
        </div>
        </div>
        )
    }
}

export default Li