import React from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import	* as Routes from 'react-router'
import {setMessage} from '../../store/reducers/message.js'
import prototypeComponent from '../../HOC/test.js'

@connect(
  (state)=>({
    message:state.message,
  }),
  {setMessage} 
)
class Hobby extends React.Component{
	constructor(){
		super()
		this.state={
			
		}
	}
	componentDidMount = () =>{
		console.log(Routes,"routes")
	}
	AddStore=()=>{
		let action = {
			name:"NEWs"+parseInt(Math.random()*10)
		}
		this.props.setMessage(action)
	}
	render(){
		return(<div>
			<div>
				<div>{this.props.message.name}</div>
				<button onClick={()=>{this.AddStore()}}> AddReducer </button>
			</div>
		</div>)
	}
}

export default prototypeComponent(Hobby)

