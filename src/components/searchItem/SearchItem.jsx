import './searchItem.css';

export default function SearchItem() {
  return (
    <div className='si'>
      <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siName">Hotel Post</h1>
        <span className='siAddress'>Eliesen Str.2 63743</span>
        <span className="siCity">Aschaffenburg</span>
        <sapn className="siDistanc">1km</sapn>
        <span className="siTitle">Best Hotel</span>
        <p className='siText'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptatum!</p>
        
      </div>

      <div className="siDetail">
        <div className="siRating">
          <span>Good</span>
          <button>3.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">110€</span>
          <span className="siTax">Includes taxes and fees</span>
          <button className="siCheckButton">See Availablity</button>
        </div>
      </div>
    </div>
  )
}
