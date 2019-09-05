import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Center=styled.div`
text-align: center;
color: white;
margin-top: 5%;
margin-bottom: 5%;
`

const Imager = (props) => {
    return (
        <div>        
          <Link to={props.to}><img style={{width: props.wide,height: 'auto',display:'block',margin:'auto',}} src={props.name} alt={props.name}/></Link>
        </div>
    )
}

const Texter = (props) => {
    const allText=props.text.map((item)=> <p>{item}</p>)
    return (
        <Center>
          {allText}
        </Center>
    )
}

const TextImage = (props) => {
    return (
        <div>
        <Texter text={props.text}/>
          <Imager wide={props.width} name={props.file} to={props.to}/>
        </div>
    )
}

const Home = () => {
  return (
      <TextImage text={["My name is Holly Anne and I'm a yoga teacher in San Francisco, California.","I'm getting married on Sept. 1, 2030,","to this wonderful charlatan I've welcomed into my life -"]} width="27%" file="bwoman.svg" to="/about"/>
  );
}

const About = () => {
  return (
        <TextImage text={["His name is Jimmy James and he is the most amazing human in the universe.","I'm so grateful to be spending my life with this absolute legend."]} width="30%" file="bman.svg" to="/union"/>
  );
}

const Union = () => {
  return (
      <TextImage text={["Come celebrate our union at the Green Cross Dispensary,","on Sept. 3, 2030, doors open 6pm.","And if that's not enough for ya..."]} width="20%" file="cake.svg" to="/arrival"/>
  );
}

const Arrival = () => {
  return (
      <TextImage text={["We're also celebrating a new arrival!"]} width="20%" file="gift.svg" to="/baby"/>
  );
}

const Baby = () => {
  return (
      <TextImage text={["We've got a new addition to the James family on the way.","That's right, I'm 6 months pregnant!"]} width="20%" file="baby.svg" to="/world"/>
  );
}

const World = () => {
  return (
      <TextImage text={["We're hoping you have a great one,","from all of us Jameses' -","Holly, Jimmy, and little Hieronymus -"," in 2031!"]} width="20%" file="world.svg" to="/"/>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/union" component={Union} />
        <Route path="/arrival" component={Arrival} />
        <Route path="/baby" component={Baby} />
        <Route path="/world" component={World} />                                
      </div>
    </Router>
  );
}

export default App;
