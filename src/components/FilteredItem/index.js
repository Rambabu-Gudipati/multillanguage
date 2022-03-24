import './index.css'

const FilteredItem = props => {
  const {itemDetails} = props
  const {imageUrl, imageAltText} = itemDetails

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}
export default FilteredItem
