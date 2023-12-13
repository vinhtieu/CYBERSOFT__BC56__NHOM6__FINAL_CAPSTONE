import React from 'react'
import Banner from '../components/Banner/Banner'
import ListCourses from '../components/ListCourses/ListCourses'
import Intro from '../components/Intro/Intro'
import Review from '../components/Review/Review'

export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Intro/>
        <ListCourses/>
        <Review/>
    </div>
  )
}
