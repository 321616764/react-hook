import React,{useMemo,useState,useCallback} from 'react'

export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
	// const [state,setState] = useState(store.getState())
	/**
	 * useMemo会在组件第一次渲染的时候执行
	 * 之后会在其依赖的变量发生改变时再次执行
	 * 如果没有依赖的变量，那么只执行一次
	 * */
    // const expensive = useMemo(() => {
    //     console.log('compute');
    //     let sum = count+1;
    //     return sum;
    // }, [count]);
	
	function expensive(){
	    let sum = count+1;
	    return sum;
	}
 
    return <div>
        <h4>{count}-{expensive}</h4>
       
		<div>{val}</div>
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}