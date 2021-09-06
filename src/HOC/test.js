import React from 'react'
function prototypeComponent(Component){
	return class extends React.Component{
		constructor(props){
			super(props)
			this.state={
				
			}
		}
		componentDidMount= () =>{
			console.log("自定义高阶组件")
			console.log(this.props,"props") //可拿取所应用组件的props
		}
		render(){
			return(<Component/>)
		}
	}
}
export default prototypeComponent;