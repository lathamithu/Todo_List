import React, { Component } from 'react';
export default class Back extends Component {
  flag = true;

  static defaultProps = {
      user_detials: {},
      render: null,
  };


  constructor(props) {
      super(props);
      this.state = {
          todo: '',  
      };
  }



  handleChange = (event) => {
      const { target } = event;
      const { name } = target;
      const { value } = target;
      this.setState({
          [name]: value,
      });
  }


  postTodo = async () => {

    if (!this.flag){
        return
    }
    const { todo } = this.state;
    this.setState({
        todo: ''
    })
    const todoObj = {
        'todo': todo
    }
    const setting = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoObj),
    };
    
    try {
        const response = await fetch('https://api.backendless.com/36DC4E7A-2B33-40D0-A382-FD197E23A89B/BC24AD0C-019C-42A0-BAAD-229B8D8F7222/data/Todo', setting);
        // const data = await message.json();
        if (response.status >= 200){
            this.flag = true
        }
    } catch {
        //Catch block for future code
    }
    return null
  }


  newItem=(List) => {

        var ul = document.getElementById("lst");
        var li = document.createElement("lii");
        li.appendChild(document.createTextNode(List));
        ul.appendChild(li);
        li.onclick = function(List){
            List.target.parentElement.removeChild(List.target);
        };
}
render() {
    const { todo } = this.state;
    return (
      <>
          <input   name="todo" className="form-control" value={todo} onChange={this.handleChange} placeholder="Add task..." /> 
          <button type="button" onClick={(e) =>{ this.postTodo(e);this.newItem(e);} }>Add</button>
      </>
    );
}
}
