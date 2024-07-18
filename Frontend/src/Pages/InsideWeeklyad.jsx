import React from 'react'
import InWeekly from './components/InWeekly'
import Grilling from './components/Grilling'

export default function InsideWeeklyad() {
  return (
    <div className='h-2/3 2-96'>
    <InWeekly desc="let's get the weekly notice of what you want" image='./src/assets/pictures/momo.jpeg'/>
    <Grilling />
    </div>
  )
}