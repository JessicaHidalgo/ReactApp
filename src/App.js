
import React from "react";

import Formulario from "./components/formulario";
import Header from "./components/hearder";
import axios from "axios"; 
import PostList from "./components/PostLists";

  export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state={user:{
          userName:"Wemancconect",
          password:"123"
        }, 
          error:'',
          posts:[]
        }
      this.logout=this.logout.bind(this);
      this.sigin=this.sigin.bind(this);

    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((result)=>{
       this.setState({
         posts:result.data
       });
      });
    }
componentDidUpdate(){
  console.log('Updating phase:componentDidUpdate')
}
componentWillMount(){
  console.log('Unmount phase:constructor')
}
static getDerivedStateFromError(error){
  return{error:error}
}
comoponentDidCatch(error,info){
  console.log('Error phase: '+error)
}
logout (event){
  event.preventDefault();
  this.setState({user:{
    userName:"",
    password:""
  }});

}
sigin (event){
  event.preventDefault();
  this.setState({user:{
    userName:"Jessica",
    password:"nything"
  }});

}
render (){
  console.log('render')
  console.log(this.state.posts)
  if(this.state.error){
    return <div>User not found</div>
  }
  
  return (
  <div className="container">
   <Header 
      user={this.state.user.userName}
      logout={this.logout}
      sigin={this.sigin}/>
      
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>

    
   {
    this.state.user.userName ? <PostList posts={this.state.posts}/>:<Formulario username={this.state.user.userName} 
    password={this.state.user.password}/>
    }
   <footer>Hola</footer>
  </div>)
}}