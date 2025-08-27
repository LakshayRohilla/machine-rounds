import React, {useState} from 'react';

export default function UpperCaseCharCounter(props) {
  const [count, setCount] = useState(0);

  function changeHandler(e){
    const chars = (e.target.value).split('');
    const lastChar = chars[chars.length-1];
    if(lastChar.toUpperCase() === lastChar) setCount(count+1);
  }

  return (
    <div className='App'>
      <h1>UpperCase Char Counter</h1>
      <textarea style={{height:'70px', width:'370px'}} onChange={changeHandler}/>
      <h2>Upper chars : {count}</h2>
      <hr/>
    </div>
  );
}