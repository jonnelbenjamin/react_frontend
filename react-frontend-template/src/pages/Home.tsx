import React from 'react'
import Button from '../components/Button'

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
      <p className="mb-6">This is a starter template for your React application.</p>
      <div className="flex gap-4">
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
      </div>
    </div>
  )
}

export default Home