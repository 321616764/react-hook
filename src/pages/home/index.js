import React,{
	useState,
	useEffect,
	useRef,
	useContext,
	createContext,
	useMemo,
	useReducer,
	useCallback
} from 'react'
import {Button,Input} from 'antd'
import PropTypes from 'prop-types'
import axios from 'axios'


const theme = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const HookUseContext = createContext(theme.light);

	
const set = new Set();

const Home =()=>{
	const [collapsed,setColl] = useState(false)
	const [count,setCount] = useState(30)
	
	const refVal = useRef(null)
	
	const expsent = useMemo(()=>{
		console.log(count,"count")
		/**
		 * useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。
		 * 
		 * useMemo会在组件第一次渲染的时候执行
		 * 之后会在其依赖的变量发生改变时再次执行
		 * 如果没有依赖的变量，那么只执行一次
		 * 
		 * 与useEffect一样，
		 * useMemo会return 一个值，并且无副作用
		 * 
		 * 在useMemo函数内通过复杂计算获取当前值得时候，
		 * 不需要再父组件每次更新的时候重新计算，只要在依赖项发生变化的时候计算即可
		 * */
		// let sum = 0;
		// for (let i = 0; i < count * 100; i++) {
		// 	sum += i;
		// }
		return count+1;
	},[count])
		
	const [sum,dispatchSum] = useReducer((state,action)=>{
		// state 总数 ， action 每次触发传入的值
		//类似于 Array的方法 reduce  把传入的的值与已有的值相加，然后返回出去
		console.log(state,action,"state.action")
		return state + action
	},100)

	
	
	
	/**
	 * useEffect会在页面初次渲染时加载一次，
	 * 
	 * 如果没有第二个参数，此后页面每次更新时，都会调用一次，（不建议）
	 * 
	 * 如果有第二个参数，参数为一个数组，那么这个useEffect会初次渲染时加载一次，
	 * 此后每当数组里的元素更新改变时，会再次调用,其他与该数组内元素无关的渲染，不会再起作用
	 * 
	 * 如果第二个参数为空数组，那么只会在页面初次渲染时，加载一个这个useEffect，此后不再加载
	 * 
	 * return 在组件卸载时触发，主要是用来清除useEffect带来的一些副作用，
	 * */ 
	useEffect(()=>{
		console.log("无依赖任何值，每次页面update都会调用")
		return () =>{
			console.log("useEffect销毁")
			// 组件销毁时触发 可在这里取消一次
		}
	})
	
	useEffect(()=>{
		console.log("空数组useEffect,只会在页面初始化时加载一次")
	},[])
	
	useEffect(()=>{
		console.log("依赖于count变量，页面初始化时调用一次，此后只有count变动时，才会触发")
	},[count])
	
	function setRef(){
		setCount(count+1)
	}
	const setColls = () =>{
		setColl(!collapsed)
	}
	
	const back = useCallback(()=>{
		console.log("useCallback")
	},[count])
	
	console.log("父组件渲染")
	return(<div>
		<div>
			<div>
				<div>
					<span>useReducer:{sum}</span>&emsp;
					<span onClick={() => dispatchSum(3)}>Add 3</span>
				</div>
			</div>
			<div>
				<h1>useMemo：{expsent}</h1>
				<h2>useCallback:{set.size}</h2>
			</div>

			<div>
				<Input defaultValue={count}/>
			</div>
			<Button onClick={setRef}>count+1</Button>
			
			<Input ref={refVal}/>
			<div>
			<button onClick={setColls}> collapsed </button>
			</div>
			
			<div>
				<HookUseContext.Provider value={theme.dark}>
					<ChildContext s={"proptype"}/>
				</HookUseContext.Provider>
			</div>
			
			<div style={{marginTop:'100px'}}>
				<Use back={back} count={count}></Use>
			</div>
		</div>
	</div>)
}

const Use = React.memo((props)=>{
	console.log("子组件渲染")
	return(<div>Use:{props.count}</div>)
})
// function Use(props){
// 	console.log("子组件渲染")
// 	return(<div>Use:{props.back}</div>)
// }


function ChildContext(props){
	const{s} = props
	return(<div>
		<GrandSon/>
	</div>)
}
ChildContext.defaultProps={
	required:[]
}
ChildContext.propTypes = {
	s:PropTypes.string,
	
	//你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保这个 prop 没有被提供时，会打印警告信息。
	required:PropTypes.array.isRequired, 
	
	//你可以通过 PropTypes.element 来确保传递给组件的 children 中只包含一个元素。
	// obj:PropTypes.element
}

function GrandSon(){
	/**
	 * useContenxt接受一个对象 ，并返回 createContext的当前值，
	 * 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
	 * <HookUseContext.Provider value={xxxx}>
	 * 		xxx
	 * </HookUseContext.Provider>
	 * */
	const parent = useContext(HookUseContext)
	// console.log(parent,"parent")
	return(<div>
		<Button>dasas</Button>
	</div>)
}

export default Home


