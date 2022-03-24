import {Component} from 'react'
import TabItem from '../TabItem'
import FilteredItem from '../FilteredItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredItems = () => {
    const {activeTabId} = this.state
    const filteredDetails = languageGreetingsList.filter(
      item => item.id === activeTabId,
    )

    return filteredDetails
  }

  render() {
    const {activeTabId} = this.state
    const filteredDetails = this.getFilteredItems()

    return (
      <div className="app-container">
        <h1 className="title">Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(tabDetails => (
            <TabItem
              key={tabDetails.id}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.id}
            />
          ))}
        </ul>
        <ul>
          {filteredDetails.map(itemDetails => (
            <FilteredItem key={itemDetails.id} itemDetails={itemDetails} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
