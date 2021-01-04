import React from 'react'
import '../styles/Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
        <div className='cards-container'>
          <div className='cards-wrapper'>
            <ul className='cards-items'>
              <CardItem
                src='/images/ck_front_page.jpg'
                text='Ranking Famous People'
                label='Android App'
                path='/ckapp'
              />
            </ul>
            <ul className='cards-items'>
              <CardItem
                src='/images/sm_front_page.jpg'
                text='An app relicating the chrome momentum extention'
                label='Android App'
                path='/smapp'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards
