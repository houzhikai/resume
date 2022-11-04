import { Carousel } from 'antd';
import './index.scss';

interface dataListProps {
  id: string,
  title: string
}
const TextUpDown = (props: { list: dataListProps[] }) => {
  const { list } = props
  let divList: any = [];
  let length = list.length / 2;
  for (let i = 0; i < length; i++) {
    let itemList: any[] = [];
    for (let j = i * 2; j < i * 2 + 2; j++) {
      if (list[j])
        itemList = [...itemList, list[j]];
      else
        itemList = [...itemList, {}];
    }
    if (itemList.length > 0)
      divList = [...divList, itemList];
  }

  return (
    <div className='headline'>
      <div className='title'>
        <b>商务</b><br />
        <b>头条</b>
      </div>
      <div className='advertise'>
        <Carousel vertical dots={true} autoplay={true}>
          {
            divList.map((s: any, i: any) =>
              <div key={i}>
                <ul>
                  {
                    s.map((s1: any, i: any) =>
                      s1.id ?
                        <li key={s1.id}> {s1.title}</li> :
                        <li key={i}></li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </Carousel>
      </div>
    </div>
  );
}
export default TextUpDown