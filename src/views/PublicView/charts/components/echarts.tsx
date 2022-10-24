import * as echarts from 'echarts'
import { useEffect } from 'react';

const Echarts = () => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('echart') as any)
    myChart.setOption({
      color: ['#a1aee7', '#c1c3fc'],
      title: {
        text: '销售量', textStyle: {
          fontSize: 20,
          fontWeight: 700
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: { backgroundColor: '#6a7985' }
        }
      },
      legend: {
        data: [{ name: '预算', icon: 'rect' }, { name: '利润', icon: 'rect' }],
        left: '75%'
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        width: '98%',
        left: '0',
        right: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: { interval: 0 },
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false }
      },
      series: [
        {
          name: '预算',
          type: 'line',
          stack: 'Total1',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: '#a1aee7'
          },
          emphasis: { focus: 'series' },
          data: [140, 232, 101, 264, 90, 340, 250, 234, 244, 342, 145, 234]
        },
        {
          name: '利润',
          type: 'line',
          stack: 'Total2',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: '#c1c3fc'
          },
          emphasis: { focus: 'series' },
          data: [240, 200, 160, 200, 301, 201, 150, 250, 221, 200, 195, 100]
        },
      ]
    })
  }, [])


  return (
    <>
      <div id='echart' style={{ width: '88%', height: '400px' }}></div>
    </>
  );
}

export default Echarts;
