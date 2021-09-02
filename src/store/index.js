import {createStore,combineReducers} from 'redux'
import {message} from './reducers/message'

const initStore = () =>{
	const store = createStore(
		combineReducers({
			message,
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	return store;
}
export default initStore;



/**
 * combineReducers 把一个由多个不同的reducer作为value的Object
 * 然后合并成一个最终的reducer 就可以对这个reducer调用createStore
 * 因为随着项目越来越大，reducer也需要分开管理，模块化进行数据的分离
 * */


/**
 * 什么是redux？
	Redux是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库
	是一个管理全局应用状态的库, 
	Redux使用单向数据流
Redux：
	Redux期望所有状态更新都是使用不可变的方式
Action：
	Action是一个具有 type字段的普通javascript对象，
	你可以将action视为描述应用程序中发生了什么事件
Reducer：
	reducer是一个函数,接收当前的state和一个action，必要时决定如何更新状态，并返回新状态
	(state,action) => newState 
	你可以将reducer视为一个事件监听器，它根据接收到的action类型处理事件
	Reducer必须符合以下规则：
	仅使用 state 和 action 参数计算新的状态值
	禁止直接修改state，必须通过复制现有的state并对复制的值进行更改的方式来做不可变更新
	禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码
Store：
	store是通过传入一个reducer来创建的，并且有一个名为getState的方法，它返回当前状态值
Dispatch:
	redux store有一个方法叫dispatch 更新state的唯一方法就是调用store.dispatch() 
	并传入一个action对象，store将执行所有reducer函数并计算更新后的state.调用getState() 可以获取到新的state
	dispatch 一个action可以形象的理解为“触发一个事件”
Selector
	Selector函数可以从store状态树中提取指定的片段，随着应用变的越来越大，
	会遇到应用程序的不同部分需要读取相同的数据，selector可以避免重复这样的读取逻辑
 * */