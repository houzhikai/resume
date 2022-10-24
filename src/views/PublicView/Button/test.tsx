// import { Button } from 'antd';
// import React, { useEffect, useState } from 'react';

// function Test() {
//   const [content, setContent] = useState(0)
//   // const [value, setValue] = useState(60)

//   //   useEffect(() => {
//   //     let timer
//   //     if (value > 0) {
//   //       timer = setInterval(() => {
//   //         setValue(value - 1)
//   //         value--
//   //         console.log(value)
//   //       },1000)
//   //     } else {
//   //       value = 0
//   //     }
//   // return clearInterval(timer)
//   //   },[value])


//   // const temp = 1
//   // useEffect(() => {
//   //   console.log('------------------')
//   // }, [temp])
//   const [toggle, setToggle] = useState(false)
//   const handleToggle = () => {
//     console.log(toggle)
//     setToggle(!toggle)
//   }
//   return (
//     <div>
//       {/* <Button onClick={() => setContent(content + 1)}>add</Button> */}
//       <div>toggle:{`${toggle}`}</div>
//       <Button onClick={() => handleToggle()}>toggle</Button>
//     </div>
//   );
// }

// export default Test;
// import { useState } from "react"
// import { resolve } from "dns"
// const useToggle = () => {
//   const [value, setValue] = useState(false)
// const toggle = () => {
//     setValue(!value)
//   }
//   return [value, toggle]
// }
// export default useToggle



// async function demo(value, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//         resolve(value)
//     }, delay);
//   })
// }

// async function demo1() {
//   const a = await demo(1, 200)
//   return a
// }
// demo1()

import './test.scss'
const demo = () => {
  const word = [
    {
      title: '弹性计算',
      product: [
        '弹性计算',
        '弹性裸金属服务器',
        '22',
        '33'
      ]
    },
    {
      title: '域名与网站（万网）',
      product: [
        '11',
        '22',
        '33'
      ]
    },
    {
      title: '互联网中间件',
      product: [
        '11',
        '22',
        '33'
      ]
    },
    {
      title: '开发者工具',
      product: [
        '11',
        '22',
        '33'
      ]
    },
    {
      title: '开发者工具',
      product: [
        '11',
        '22',
        '33'
      ]
    },

  ]
  return (
    <div className="title">
      {word.map(item => {
        return (
          <div >
            <div>{item.title}</div>
            {
              item.product.map(p => {
                return <div>{p}</div>
              })
            }
          </div>
        )
      })}
    </div>
  )
}
export default demo