import React from 'react'
import { useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './HomeMainBar.css'
import QuestionList from './QuestionList'

const HomeMainBar = () => {


  const location = useLocation()
  const user = 5;
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList);
//   var questionList = [{
//     id:1,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:2,
//     questionTitle:'what is arrow function ?',
//     questionTags:["C++","java","javascript","React JS"],
//     askedOn:"2 hours ago",
//     userPosted:'Prithvi',
//     userId:1,
//     answer:[{
//       answerRedOn: "16 mar",
//       userAnswered:"gdfgge",
//       answerBody:'answer',
//       userId:2
//   }]
//   },
//   {
//     id:2,
//     upVotes:5,
//     downVotes:1,
//     noOfAnswers:5,
//     questionTitle:'use of back ticks ?',
//     questionTags:["C++","java","javascript","React JS","node"],
//     askedOn:"2 months ago",
//     userPosted:'Priyam',
//     userId:2,
//     answer:[{
//       answerRedOn: "16 aug",
//       userAnswered:"fdgge",
//       answerBody:'answer',
//       userId:5
//   }]
//   }
// ]
  const checkAuth = ()=>{
    if(user === null){
      alert('login or signup to ask a question');
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/'?<h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList = {questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar