const React = require('react')
const ReactDOM = require('react-dom')
const mockData = require('./mock-data')
const Question = require('./Question')

mockData.questions.forEach(data=>{
	data.options.splice(Math.floor(data.options.length*Math.random()), 0, data.answer)
})

class Quiz extends React.Component {
	constructor(){
		super()
		this.state={'step':0}
		console.log(this.state)
	}
	incStep(data){
		console.log(data)
		if (this.state.step!==mockData.questions.length-1){
			this.setState({'step': this.state.step+1})
		}else{
			this.setState({'step': 0})
		}
	}
	render(){
		return (
			<Question 
			question={mockData.questions[this.state.step].question}
			next={this.incStep.bind(this)} 
			answer = {mockData.questions[this.state.step].answer}
			options = {mockData.questions[this.state.step].options}
			/>
			
		)
	}
}

module.exports = Quiz