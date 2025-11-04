import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sudesh' age={25}/>
      <Card user='Shubham' age={24}/>
    </div>
  )
}

export default App
