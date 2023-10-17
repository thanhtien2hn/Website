// import { Card, Meta } from 'antd'

import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperImageStyle,
  WrapperPriceText,
  WrapperReportText,
} from './style'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px' }}
      style={{ width: 240 }}
      bodyStyle={{ padding: '10px' }}
      cover={
        <img
          alt="example"
          src="https://dep.com.vn/wp-content/uploads/D19nHIXX4AAAFMH.jpg"
        />
      }
    >
      <WrapperImageStyle src={logo} alt="logo" />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>5.0</span>
          <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span>|Da ban 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1k <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
