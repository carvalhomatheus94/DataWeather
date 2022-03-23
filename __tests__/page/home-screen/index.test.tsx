import React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '../../../src/page/home-screen'

describe('Home test', () => {
  test('testing if renders correctly', () => {
    const tree = renderer
      .create(
        <HomeScreen />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
