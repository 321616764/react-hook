import React from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import	* as Routes from 'react-router'
import {setMessage} from '../../store/reducers/message.js'
<<<<<<< HEAD
import prototypeComponent from '../../HOC/test.js'
=======

>>>>>>> eb4f05b31c406b71186db3362965448415141e1e
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

<<<<<<< HEAD

export default prototypeComponent(Hobby)
=======
console.log(Hobby,"hby")
export default Hobby
>>>>>>> eb4f05b31c406b71186db3362965448415141e1e
