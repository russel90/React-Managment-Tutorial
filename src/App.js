import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const Customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender':'남자',
  'job':'대학생'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김철수',
    'birthday': '941222',
    'gender':'남자',
    'job':'재발자'
   },
   {
      'id':3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '이순이',
      'birthday': '921222',
      'gender':'여자',
      'job':'회사원'
  },      
]

class App extends Component{
  render(){
    return(
      <div>
        {
          Customers.map(c=> {
            return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
          })
       }
      </div>
    );
  }
}

export default App;
