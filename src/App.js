import React,{ Component } from 'react';
import axios from 'axios'
import Loading from './Loading';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      users: [],
      isLoading: false
    }
    this.buttonClicked = this.buttonClicked.bind(this);

  }

  getUsers()
  {

    this.setState({

      isLoading:true

    });

    axios.get('https://randomuser.me/api/?results=5')
    .then((response) =>{

      //console.log(response);
      this.setState({

        users:response.data.results,
        isLoading:false

      });

    })
    .catch((error)=>{

      console.log(error);

    });
  }

  componentDidMount()
  {

    this.getUsers();

  }

  buttonClicked(){
    alert("Yoo");
  }

 
  render() {

    return (
      <div className="App">
        { !this.state.isLoading ?
          this.state.users.map( (user) => (
          <div key={user.id.value}>
            <h1>{user.name.first}</h1>
            <p>{user.cell}</p>
            <form>
              <input type="button" value="Click me" onClick={this.buttonClicked}/>
            </form>

            <hr/>
          </div>
        )): <Loading message = "It's Loading "/> }

       
      </div>
    );

  }

}

export default App;
