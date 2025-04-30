import './App.css'
import ViewBox  from './components/PercentView'



const App = () => {
  return ( 
    <> 
      <ViewBox value={50} max={100} makeColor={(p) => `hsl(100,100%,${p*50}%)`}/>
      <ViewBox value={25} max={100} makeColor={(p) => `hsl(100,100%,${p*50}%)`}/>
      <ViewBox value={75} max={100} makeColor={(p) => `hsl(100,100%,${p*50}%)`}/>
    </>
  )
}

export default App
