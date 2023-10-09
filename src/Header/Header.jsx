import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Col } from 'antd'
import React from 'react'
import ButtonInputSearch from '../components/ButtonInputSearch/ButtonInputSearch'
import {
  WrapperHeader,
  WrapperHeaderAcc,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from './style'

const Header = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>WEB SITE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch />
        </Col>
        <Col style={{ display: 'flex', gap: '20' }}>
          <WrapperHeaderAcc>
            <UserOutlined style={{ fontSize: 30 }} />
            <div>
              <WrapperTextHeaderSmall>
                Đăng nhập/ Đăng ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAcc>
          <div>
            <ShoppingCartOutlined
              style={{ fontSize: 30, color: '#fff', gap: 20, marginLeft: 20 }}
            />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default Header
