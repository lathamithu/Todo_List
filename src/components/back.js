import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Todoitem';
import { Redirect } from 'react-router-dom';

/*var xhr  = new XMLHttpRequest();
var type = 'POST';
var url  = 'https://api.backendless.com/36DC4E7A-2B33-40D0-A382-FD197E23A89B/BC24AD0C-019C-42A0-BAAD-229B8D8F7222/data/Todo';

let json = JSON.stringify({
  List :Item()
});

xhr.open(type, url)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(List);*/


export default class Back extends Component {
  flag = true;

  static defaultProps = {
      user_detials: {},
      render: null,
  };


  constructor(props) {
      super(props);
      this.state = {
          List: '',
          
          file: null,
          display: 'none',
          redirect: false,
      };
  }

  componentDidMount() {
  }


  handleChange = (event) => {
      const { target } = event;
      const { name } = target;
      const { value } = target;
      this.setState({
          [name]: value,
      });
  }

  handlePreview = (event) => {
      try {
          this.setState({
              file: URL.createObjectURL(event.target.files[0]),
              display: 'inline-block',
          });
      } catch {
          this.setState({
              file: null,
          });
      }
  }

  postStory = async () => {
    
      if (this.flag) {
          this.flag = false;
          const { List } = this.state;
          if (List === '') {
              this.flag = true;
              return null;
          }
          this.setState({
            List: '',
              display: 'none',
          });
          const storyObj = {List};

          const setting = {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(storyObj),
          };
          try {
              const message = await fetch('https://api.backendless.com/36DC4E7A-2B33-40D0-A382-FD197E23A89B/BC24AD0C-019C-42A0-BAAD-229B8D8F7222/data/Todo', setting);
              const data = await message.json();
              const { render } = this.props;
              if (message.status === 200) {
                  render(data);
                  this.flag = true;
              } else if (message.status === 400) {
                  this.setState({
                      redirect: true,
                  });
              }
          } catch {
          // Error occured
          }
      }
      return null;
  }

  onPreview = () => {
      document.getElementById('preview').click();
  }

  onClickme = () => {
      this.setState({
          file: null,
          display: 'none',
      });
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
      const {
          display, file, List, redirect,
      } = this.state;

      if (redirect) {
          return <Redirect to="/" />;
      }
      return (
        <>
            <input   name="List" className="form-control" value={List} onChange={this.handleChange} placeholder="Add task..." /> 
            <button type="button" onClick={(e,List) =>{ this.newItem(List);this.postStory(e);} }>Add</button>
        </>
      );
  }
}

Back.propTypes = {
  user_detials: PropTypes.objectOf(PropTypes.object),
  render: PropTypes.func,
};
