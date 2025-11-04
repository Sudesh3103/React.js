import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sudesh' age={25} img='https://images.unsplash.com/photo-1761991062157-df67faab3a23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
      <Card user='Shubham' age={24} img='https://plus.unsplash.com/premium_photo-1757100707921-070878fe3796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
    </div>
  )
}

export default App
