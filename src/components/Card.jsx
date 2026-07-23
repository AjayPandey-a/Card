import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = () => {
  return (
    <div className="parent">
    <div className="card">
      <div className='top'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" alt=""/>
      <button>Save <Bookmark size={12}/></button>
      </div>
      <div className="center">
        <h3>Google <spn>30 day ego</spn></h3>
        <h2>Graphic Designer</h2>
        <div className="tag">
          <h4>Full-time</h4>
          <h4>Flexible schedule</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$150-220k</h3>
          <p>Mountain View,CA</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
    <div className="card">
      <div className='top'>
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt=""/>
      <button>Save <Bookmark size={12}/></button>
      </div>
      <div className="center">
        <h3>Amazon <spn>5 day ego</spn></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className="tag">
          <h4>Part-time</h4>
          <h4>Senior level</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>San,Francisco,CA</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
    <div className="card">
      <div className='top'>
      <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt=""/>
      <button>Save <Bookmark size={12}/></button>
      </div>
      <div className="center">
        <h3>Apple <spn>7 day ego</spn></h3>
        <h2>Graphic Designer</h2>
        <div className="tag">
          <h4>Full-time</h4>
          <h4>Flexible schedule</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$80-120k</h3>
          <p>Cupertino,CA</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
    </div>
  )
}

export default Card
