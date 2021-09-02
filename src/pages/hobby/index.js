import React from 'react'
import store from '../../store/index.js'
import {Table} from 'antd'
import {connect} from 'react-redux'

// @connect(
//   (state)=>({
//     message:state.message,
//   }), 
// )
class Hobby extends React.Component{
	constructor(){
		super()
		this.state={
			
		}
	}
	AddStore=()=>{
		let action = {
			type:'ADD',
			data:"NEWs"
		}
	}
	render(){
		return(<div>
			<div>

			</div>
			<div>
				<button onClick={()=>{this.AddStore()}}>AddReducer</button>
			</div>
		</div>)
	}
}
export default Hobby