import React from 'react'
import { Chart} from 'react-google-charts'

const WordTree = props => {
  let classValue = props.classValue

  return (
    <Chart
      width={'800px'}
      height={'300px'}
      chartType="WordTree"
      loader={<div>Loading Chart</div>}
      data={[
        ['Phrases'],
          ['Vivian learned languages Ruby'],
          ['Vivian learned languages Javascript'],
          ['Vivian learned languages HTML'],
          ['Vivian learned languages CSS'],
          ['Vivian learned frameworks Rails'],
          ['Vivian learned frameworks React'],
          ['Vivian learned testing Rspec'],
          ['Vivian learned testing Capybara'],
          ['Vivian is a full stack developer'],
      ]}
      options={{
        wordtree: {
          format: 'implicit',
          word: 'Vivian',
        },
      }}
    />
  )
}

export default WordTree
