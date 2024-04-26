// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <div className="lists">
      <li className={className}>
        <div className="cards">
          <h1 className="heading">{headerText}</h1>
          <p className="para">{description}</p>
          <button className="button">Show More</button>
        </div>
      </li>
    </div>
  )
}
export default BannerCardItem
