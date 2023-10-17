import { Col, Pagination, Row } from 'antd'
import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavabarComponent from '../../components/NavbarComponent/NavabarComponent'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange = () => {}
  return (
    <Fragment
      style={{
        padding: '0 120px',
        background: '#efefef',
      }}
    >
      <Row
        style={{
          padding: '0 120px',
          background: '#efefef',
          flexFlow: 'nowrap',
          marginTop: '10px',
        }}
      >
        <WrapperNavbar span={4}>
          <NavabarComponent />
        </WrapperNavbar>
        <Col>
          <WrapperProducts span={20}>
            <CardComponent />
            <CardComponent />
            <CardComponent /> <CardComponent /> <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            // showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{ textAlign: 'center' }}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default TypeProductPage
