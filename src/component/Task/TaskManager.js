import React, {Fragment} from 'react';
import '../Cards/Cards.css';
import Card from '../Cards/Card';
import mockData from './data';

class TaskManager extends React.Component {
    state = {
        data: [],
        inputVal: ''
    }
    componentDidMount() {
        this.setState({
            data: mockData
        })
    }
    handleInput = event => {
        this.setState({
            inputVal: event.target.value
        })
    }
    handleClick = event => {
        const data = [...this.state.data];
        data.push({
            desc: this.state.inputVal,
            status: false
        });
        this.setState({data})
    }
    
    changeStatus = (index) => {
        const data = [...this.state.data];
        const newArr = data.map((item, itemIndex) => {
            if(itemIndex === index) item.status = !item.status
            return item
        })
        
        this.setState({data: newArr});
    }
    
    deleteItem = (index) =>{
        const data = [...this.state.data];
        console.log(index)
        data.splice(index, 1);


        this.setState({
            data: data
        })
    }

    render() {
        return (
            <Fragment>
                <input type="text" onInput={this.handleInput} className='task-desc' />
                <button onClick={this.handleClick} className='add-btn'>Add</button>
                <ul className="card-list">
                    {this.state.data.map((item, index) => {
                        return (
                            <Card 
                            descr={item.desc} 
                            status={item.status} 
                            key={index} 
                            handleChange={() => this.changeStatus(index)}
                            deleteCard={() => this.deleteItem(index)}/>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}
export default TaskManager;