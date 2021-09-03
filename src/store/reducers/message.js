import Cookie from 'js-cookie'

const defaultMessage = {
	name:'',
}


export function message(state=defaultMessage,action){
	switch(action.type){
		case "SETMESSAGE":
			Cookie.set('message',action.payload)
			return {...action.payload}
		case "DELETEMESSAGE":
			if(Cookie.get('message')){
				Cookie.remove('message')
			}
			return {...defaultMessage}
		default:
			if(!state.name){
				return {...Cookie.get('message')}
			}else{
				return state
			}
	}
}

export const setMessage = (data) =>{
	console.log(data)
	return {type:'SETMESSAGE',payload:data}
}