import { Checkbox, Rate } from 'antd'
import React from 'react'
import { WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'

const NavabarComponent = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>
        })
      case 'checkbox':
        return (
          <Checkbox.Group
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <div>
                  <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                    {option.label}
                  </Checkbox>
                </div>
              )
            })}
          </Checkbox.Group>
        )
      case 'star':
        return options.map((option) => {
          return (
            <div style={{ display: 'flex' }}>
              <Rate
                style={{ fontSize: '12px' }}
                disabled
                defaultValue={option}
              />
              <span>{`tu ${option} sao`}</span>
            </div>
          )
        })
      case 'price':
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>
        })
      default:
        return {}
    }
  }
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      {/* <WrapperContent> */}
      {renderContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
      {/* </WrapperContent> */}
    </div>
  )
}

export default NavabarComponent
