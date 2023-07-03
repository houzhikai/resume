import React from 'react'
import Interactive from './interactive'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import UseIntroduce from '../../../components/UseIntroduce'
import { DescribeP, DIV, KeyTag } from '../../../components/Div'
import RollSearch from './RollSearch'

const PageView = () => {
    const describe =
    <DescribeP>
      <DIV>1）这是一个从上到下弹幕互动的效果</DIV>
      <DIV>2) 将要实现的功能：
        <DIV>1、评论上下滚动，且逐条向上翻</DIV>
        <DIV>2、默认滚动条滚动到<KeyTag>底部</KeyTag></DIV>
        <DIV>3、名称默认打码，隐藏名称，但是<KeyTag>文字不能隐藏，且需要支持多行展示</KeyTag></DIV>
        <DIV>4、<KeyTag>拼接文明提示文字</KeyTag></DIV>
      </DIV>
    </DescribeP>

  return (
    <>
    <CustomBreadcrumb arr={['通用', '互动']} />
    <UseIntroduce describe={describe} />
    {/* 模拟实时弹幕聊天室 */}
    <Interactive/>
    {/* 搜索 */}
    <RollSearch />
    </>
  )
}

export default PageView