import React from 'react'
import {lifecycle} from 'recompose'

export class LogLife extends React.Component<{name: string}, {}> {
  componentDidMount() {
    console.log(this.props.name, 'componentDidMount')
  }
  componentDidUpdate() {
    console.log(this.props.name, 'componentDidUpdate')
  }
  componentWillUnmount() {
    console.log(this.props.name, 'componentWillUnmount')
  }
  render() {
    console.log(this.props.name, 'render')
    return this.props.children
  }
}

export const whyDidItUpdate = lifecycle({
  componentDidUpdate(prevProps: any) {
    new Set(Object.keys(this.props).concat(Object.keys(prevProps))).forEach(
      key => {
        console.log('Did update. Changed props:')
        if (this.props[key] !== prevProps[key]) {
          console.log(`${key}:`, prevProps[key], '=>', this.props[key])
        }
      },
    )
  },
})
