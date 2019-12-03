import React from 'react'; // 리엑트 불러오기
import TodoItem from './TodoItem' // 아이템 컴퍼넌트 불러오기
import style from './css/list.module.css'; // 스타일 불러오기

//동적 요소를 위한 변수
const DEMO_PROPS = {
    itemList:[{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]
}
// extends = 리엑트로 부터 컴퍼넌트를 상속하겠다.
class TodoList extends React.Component{
    render(){
        // 선언 변수 불러오기
        const {itemList} = DEMO_PROPS;

        return(
            <ul className={style.list_todo}>
                {
                    // itemList.map( item => (<li key={item.id}>테스트 테스트 테스트 테스트</li>)) // => 직접 li를 만드는 방식
                    itemList.map( item => (<TodoItem key={item.id}/>)) // => li를 불러와서 하는 방식
                    // .mpa을 통해 동적 구현, 반복문인 경우 key 명시
                }
            </ul>
        );
    }
}

export default TodoList; //class 내보내기