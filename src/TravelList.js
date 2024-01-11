import { Component } from "react";
import destination from './destination.jpg';
export class TravelList extends Component {
    state={
        userInput: '',
        TravelList: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }
    addItem(input) {
     if(input==='') {
        alert('Please, enter an item')
     }
     else{

       let listArray = this.state.TravelList;
        listArray.push(input);
        this.setState({TravelList: listArray, userInput: ''})
        console.log(listArray)
   }
}
deleteItem() {
    let listArray=this.state.TravelList;
    listArray=[];
    this.setState({TravelList: listArray})
}  
 crossedWord(e) {
    const li=e.target;
    li.classList.toggle('crossed');
 }
 onFormSubmit(e) {
    e.preventDefault();
 }
    render() {
      return(
        <div>
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
            <input type="text" 
            placeholder="Your next place to visit is..."
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>

        <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
        </div>
        <ul>
            {this.state.TravelList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={destination} width="100px" alt="checkmark"/>
                    {item}
                    </li>
            ))}
        </ul>
        <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
        </div>
        </form>
        </div>
      )
    }
}