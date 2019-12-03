import React from 'react';
import style from './css/item.module.css';

const DEMO_PROPS = {
    text:"테스트 테스트 테스트 테스트 테스트 테스트 테스트"
}

class TodoItem extends React.Component{

    render(){
        const {text} = DEMO_PROPS;
        return(
            <li className={style.item_todo}>{text}</li>
        );
    }

}

export default TodoItem;

/*
1. class TodoItem {} 생성
2. 생성한 클래서 내보내기 export default TodoItem;
3. 확장을 통한 리엑트 기능 부여 extends React.Component
4. rneder() {} 생성
5. render(){ return();} 생성
6. 릭엑트 기증 부여를 위한 리엑트 불러오기 import React from 'react';
7. 변수를 이용한 동적 값 변경 const DEMO_PROPS = 
8. render 내에서 변수 불러오기 const {text} = DEMO_PROPS;
-- fe 개발자는 DEMO_PROPS를 보고 해당 부분이 동적 처리가 필요한 부분이라고 인지하여 수정하게됨.
*/