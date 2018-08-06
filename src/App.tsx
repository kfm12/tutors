import * as React from 'react';
import './App.css';
import TutorsContainer from './containers/tutorsContainer';

class App extends React.Component {
  public render() {
    let tutors = [
      { name: "Daisy", pay: 150, description: "Hello! My name is Daisy. I am an optimistic third year student at the University of Cape Town. I enjoy tutoring and am a mature student. Thus I have lots of techniques and knowledge to give on how to do well in assessments.", courseList: ["Math 105", "Math 106", "Math 111L", "Math 112L", "Math 121"], webpage: "https://www.google.com/search?q=daisy", imgurl:"https://simplytutors.blob.core.windows.net/user-storage/d37de360-425c-4b41-acba-bba83185cf59/Daisy.jpg" },
      { name: "Donaubrium", pay: 150, description: "I am currently studying at the University of Cape Town, towards a degree in Actuarial Science(3rd year).I chose to tutor MAM1000W, BUS2016H and STA1006S due to the good results I achieved for the respective courses. What differentiates me from other tutors is that in addition to being able to provide you with a good understanding of the work, I can seamlessly communicate with others and therefore you, as the potential tutee, will feel a lot more comfortable around me.", courseList: ["English 108", "English 203"], webpage: "https://www.google.com/search?q=Donaubrium", imgurl:"https://simplytutors.blob.core.windows.net/user-storage/93a275f4-2ad1-4408-b754-a79f6da91ddc/Donaubrium.png" },
      { name: "Fulufhelani", pay: 150, description: "I am a third year Actuarial Sciences Student at the University of Cape Town. I love problem solving, critical thinking and anything that can force me to stretch and grow as an individual. If i had to describe myself using one word, the word would be: number-fanatic, i am just crazy abut numbers!. I believe I have a heart of a teacher which is why i chose to be a tutor.", courseList: ["Science 208", "Science 209", "Science 210"], webpage: "https://www.google.com/search?q=Fulufhelani", imgurl:"https://simplytutors.blob.core.windows.net/user-storage/0396f31e-aa6f-4190-b539-c9c728850253/20170303_091555%20-%20Fulufhelani%20Mashapha.jpg" },
      { name: "Gugulethu", pay: 150, description: "I am an energetic and sporty individual. I love mathematics and number crunching. I want to enrich university subjects for students who want to achieve better results.", courseList: ["English 108"], webpage: "https://www.google.com/search?q=Gugulethu", imgurl: "https://simplytutors.blob.core.windows.net/user-storage/f2134cc4-d065-4226-a267-4536558f9273/Gugulethu.jpg" }
  ];
    return (
      <div className="App">
      <TutorsContainer tutors={tutors}/>
      </div>
    );
  }
}

export default App;
