import React, { useRef, useEffect, useState } from 'react'
import './index.scss'
import styled from 'styled-components'

interface TextScrollProps {
  content?: string // 内容
  duration?: number // 持续时间/s
}

function TextScroll(props: TextScrollProps) {
  const { content, duration } = props
  const defaultState = {
    contentWidth: 0,
    left: 0,
    duration: duration || 3,
  }
  const [state, setState] = useState(defaultState)
  let ref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const { offsetWidth, parentElement } = ref.current as HTMLParagraphElement
    setState({
      ...state,
      contentWidth: offsetWidth,
      left: parentElement!.offsetWidth,
    })
  }, [])
  const { contentWidth, left, duration: timing } = state
  const animationName = `marquee_${contentWidth}`
  console.log('left', left)
  const Text = styled.p`
    padding: 10px;
    position: relative;
    left: ${left}px;
    animation: ${animationName} ${timing * 2}s linear infinite both;
    animation-play-state: running;
    animation-fill-mode: forwards;

    @keyframes ${animationName} {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-${contentWidth + left}px);
      }
    }
  `
  return (
    <div className="marquee_box">
      <Text ref={ref}>{content || ''}</Text>
    </div>
  )
}

export default React.memo(TextScroll)
