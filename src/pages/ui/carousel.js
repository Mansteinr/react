import React from 'react'
import { Card,  Carousel } from 'antd'
import './ui.less'

export default class Carousels extends React.Component{
  onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  render () {
    return (
      <div>
        <Card title="北京轮播">
          <Carousel afterChange={this.onChange} autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card title="图片轮播" >
        <Carousel effect="fade" autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        </Card>
      </div>
    )
  }
}