import React from 'react';
import './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
         <header>
                <div className='left'>
                    <a className={this.props.type} ></a>
                </div>
                <div className='center'>今日头条</div>
                <div className='right'><a></a></div>
        </header>
        )
    }
}

   Header.defaultProps = {
   type:'email'
  };
export default Header