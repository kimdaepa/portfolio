// import React from 'react';
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'

// class TodoContainer extends React.Component{
//     render(){
//         return(
//             <div>
//                 <TodoInput/>
//                 <TodoList/>
//             </div>
//         );
//     }
// }

// export default TodoContainer;

import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
    container(props){
        super(props);

        this.state = {
            todolist:[
                {id1, text:"테스트"},
                {id2, text:"테스트"},
                {id3, text:"테스트"},
                {id4, text:"테스트"},
                {id5, text:"테스트"}
            ]  
        }
    }
    render(){
        return(
            <div>
                <TodoInput/>
                <TodoList/>
            </div>
        );
    }
}

export default TodoContainer;