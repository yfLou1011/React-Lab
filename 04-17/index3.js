// render data list

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { extname } from 'path';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
  
class User extends Component{
    render(){
        const {user} = this.props
        return(
          <div>
            <div>姓名：{user.username}</div>
            <div>年龄：{user.age}</div>
            <div>性别：{user.gender}</div>
            <hr />
          </div>
        )
    }
}
class UserList extends Component {
render () {
    return (
    <div>
        {users.map((user,i)=> <User key={i} user={user}  />)}
    </div>
    )
}
}

// class Lesson extends Component {
// /* TODO */
// render(){
//     const {lesson} = this.props
//     return(
//     <div onClick={()=> console.log(`${this.props.id} - ${lesson.title}`)}>
//         <h1>{lesson.title}</h1>
//         <p>{lesson.description}</p>
//     </div>
//     )
// }
// }
  
// class LessonsList extends Component {
// /* TODO */
// render(){
//     const lessons = this.props.lessons
//     return(
//     <div>
//         {lessons.map((lesson, i) => {
//           return <Lesson key={i} id={i} lesson={lesson}  />
//         })}
//     </div>
//     )
// }
// }

class Index extends Component{
render(){
    return(
        <div>
            <UserList />
            {/* <LessonsList /> */}
        </div>    
    )
}
}


  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  )
