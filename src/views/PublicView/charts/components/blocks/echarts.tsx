import React, { useEffect } from 'react';
import * as echarts from 'echarts'

interface PropsType {
  ages: any
}
const Echarts = (props: PropsType) => {
  const { ages } = props
  const dataList = JSON.parse(JSON.stringify(ages))
  const data = dataList.map((item: { text: string, percent: number }) => {
    return {
      name: item.text,
      value: item.percent
    }
  });
  useEffect(() => {
    const myCharts = echarts.init(document.getElementById('charts') as any)
    myCharts.setOption({
      tooltip: {
        trigger: 'item'
      },
      color: ages.map((item: { color: string }) => item.color),
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  })
  return (
    <div style={{ flex: 1 }}>
      <div id='charts' style={{ height: '168px' }}></div>
    </div>
  );
}

export default Echarts;
