import React from 'react'
import Slider1 from '../../assets/images/Slider1.webp'
import Slider2 from '../../assets/images/Slider2.webp'
import Slider3 from '../../assets/images/Slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import SiderComponent from '../../components/SiderComponent/SiderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'

const HomePage = () => {
  const arr = ['TV', 'TL', 'LT']
  return (
    <>
      <div style={{ padding: '0px 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: '#efefef',
          padding: '0px 120px',
          height: '1000px',
          width: '100%',
        }}
      >
        <SiderComponent arrImages={[Slider1, Slider2, Slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <WrapperButtonMore
            textButton="Xem them"
            type="outline"
            styleButton={{
              border: '1px solid rgb(11, 116, 229)',
              color: 'rgb(11,116,229)',
              width: '240px',
              height: '38px',
              borderRadius: '4px',
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
          {/* <NavabarComponent /> */}
        </div>
      </div>
    </>
  )
}

export default HomePage
