import React from 'react'
function prototypeComponent(Component){
	return class extends React.Component{
		constructor(props){
			super(props)
			this.state={
				
			}
		}
		render(){
			return(<Component/>)
		}
		
	}
}