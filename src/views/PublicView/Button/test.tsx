import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

function Test() {
  const [content, setContent] = useState(0)
  // const [value, setValue] = useState(60)

  //   useEffect(() => {
  //     let timer
  //     if (value > 0) {
  //       timer = setInterval(() => { 
  //         setValue(value - 1)
  //         value--
  //         console.log(value)
  //       },1000)
  //     } else {
  //       value = 0
  //     }
  // return clearInterval(timer)
  //   },[value])


  const temp = 1
  useEffect(() => {
    console.log('------------------')
  }, [temp])
  return (
    <div>
      <Button onClick={() => setContent(content + 1)}>add</Button>
    </div>
  );
}

export default Test;
