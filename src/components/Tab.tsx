import React from 'react'

const Tab = ({tab, currentTab}) => {
  return (
    <>
        <input key={tab.id} value={tab.value} type="radio" id={`radio-${tab.id}`} name='tabs' />
        <label onClick={e => currentTab(e)} key={tab.value} className="tab" htmlFor={`radio-${tab.id}`}>{tab.value}</label>
    </>
  )
}

export default Tab