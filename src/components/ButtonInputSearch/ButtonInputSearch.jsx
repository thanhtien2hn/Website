import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React from 'react'

const ButtonInputSearch = () => {
  return (
    <div>
      <Input />
      <Button size="large" icon={<SearchOutlined />}></Button>
    </div>
  )
}

export default ButtonInputSearch
