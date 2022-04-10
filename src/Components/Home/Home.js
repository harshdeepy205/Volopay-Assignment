import React,{useState} from 'react'
import InfoCard from '../Card/InfoCard'
import Header from '../Header/Header'
import CardSections from '../Tabs/CardSections'

const Home = () => {

  return (
      <>
        <div>
            <Header/>
        </div>
        <CardSections/>
    </>
  )
}

export default Home