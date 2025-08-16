import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './pages/Layout'
import DashBoard from './pages/DashBoard'
import WriteArticle from './pages/WriteArticle'
import BlogTitle from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import Removebackground from './pages/Removebackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'



const App = () => {

  return (
    <div>
    <Toaster/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ai' element={<Layout />}>
      <Route index element={<DashBoard />} />
      <Route path='write-article' element={<WriteArticle />} />
      <Route path='blog-titles' element={<BlogTitle />} />
      <Route path='generate-images' element={<GenerateImages />} />
      <Route path='remove-background' element={<Removebackground />} />
      <Route path='remove-object' element={<RemoveObject />} />
      <Route path='review-resume' element={<ReviewResume />} />
      <Route path='community' element={<Community />} />
    </Route>
  </Routes>
  </div>
  

 
  )
}

export default App




