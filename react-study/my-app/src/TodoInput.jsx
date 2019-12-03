// import React from 'react';
// import style from './css/input.module.css';

// class TodoInput extends React.Component{
//     render(){
//         return(
//             <form>
//                 <div className = {style.area_input}>
//                     <input placeholder="enter task"/>
//                     <button type="submit">add</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default TodoInput;

import React from 'react';
import style from './css/input.module.css';

class TodoInput extends React.Component{
    render() {
        return(
            <form>
                <div className={style.area_input}>
                    <input placeholder="enter task"/>
                    <button type="submit">add</button>
                </div>
            </form>
        );
    }
}
export default TodoInput