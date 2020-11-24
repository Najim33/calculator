import React,{ Component} from 'react'
import './Button.css'


const isOperator=(val)=>{
    return !isNaN(val) || val==='.' || val==='=';
}
const isOpr=(val)=>{
    return  val==='/';
}
const isOpl=(val)=>{
    return val==='.'  ;
}


class Button extends Component {
    render(props) {
        return (
            <div className={`button-wrapper ${isOperator(this.props.children)?null:"operator"} ${!isOpr(this.props.children)?null:"opr"}  ${!isOpl(this.props.children)?null:"opl"}`  } onClick={()=>{  this.props.handleClick(this.props.children)}}  >
                {this.props.children}
            </div>
        )
    }
}

export default Button
