import * as React from 'react';
import './App.css';
import TutorsContainer from './containers/tutorsContainer';

class App extends React.Component {
  public render() {
    let tutors = [
      { name: "Paul", pay: 300, description: "I'm a tutor", courseList: ["Math 111L", "Math 112L"], webpage: "https://www.google.com/search?q=paul" },
      { name: "Steve", pay: 250, description: "I'm a better tutor than Paul", courseList: ["English 108", "English 203"], webpage: "https://www.google.com/search?q=steve" },
      { name: "Lucy", pay: 250, description: "Paul and Steve both suck. You should pick me instead", courseList: ["Science 208", "Science 209", "Science 210"], webpage: "https://www.google.com/search?q=lucy" },
      { name: "Jane", pay: 200, description: "I'll give you cookies", courseList: ["English 108"], webpage: "https://www.google.com/search?q=jane" }
  ];
    return (
      <div className="App">
      <TutorsContainer tutors={tutors}/>
      </div>
    );
  }
}

export default App;
