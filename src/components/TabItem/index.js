import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
