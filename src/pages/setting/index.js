import React from 'react'
import ReactDOM from 'react-dom'
import * as redux from 'react-redux'
class Setting extends React.Component{
	constructor(){
		super()
		this.state={
			
		}
	}
	componentDidMount = () =>{
		console.log(React)
		console.log(React.echarts)
		
		let myEchart = React.echarts.init(document.getElementById('bar'))
		myEchart.setOption({
			title: { text: 'ECharts 入门示例' },
			xAxis: {
				data: [{
					value:'陈述',
					textStyle:{
						color:'#ffff00'
					}
				}, "羊毛衫", "雪纺衫", "裤子"]
			},
			yAxis: {
				type: 'value',
				name: '温度',
				min: 0,
				max: 305,
				position: 'left',
				axisLine: {
					show: true,
					lineStyle: {
						color: '#000000'
					}
				},
				axisLabel: {
					formatter: '{value} °C'
				}
			},
			series: [{
				data:[
					120, {
						value: 100,
						itemStyle: {
							color: '#00ff00'
						}
					},
					120, {
						value: 100,
						itemStyle: {
							color: '#ff0000'
						}
					},
					120, {
						value: 200,
						itemStyle: {
							color: '#ffff00'
						}
					},
					120, {
						value: 200,
						itemStyle: {
							color: '#0000ff'
						}
					},
				],
				type:'bar',
				barWidth:'60',
				barGap:'0'
			}]
		});
	}
	render(){
		return(<div> 
			<div id='bar' style={{width:'500px',height:'500px'}}> </div>
			Setting { React.getNum(10) }
			<div>
				{
					React.createElement('mark',{
						className:'marks',
						
						style:{
							cursor:'pointer'
						},
						onClick:()=>{alert("eroror")}
					},"marks")
				}
				<button>ADD element</button>
			</div>
		</div>)
	}
}

export default Setting