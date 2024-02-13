import Video from './components/Video'
import './App.css'
//~ Here we are passing props in different way first we have  created object and used spread operator and then we have simply defined it without using object. We will receive this props in Video component
function App(){
  let obj1={
    title: 'Vlog 1',
    views: '10K',
    time: '3 months ago'
  }
return(
  <>
  <Video {...obj1}/>
  <Video title='Vlog 2' views= '100K' time= '9 months ago' />
  <Video title='Vlog 3'  time= '9 months ago' />   {/** //~Here even if we are not passing any value for view props still we have the capability to define it where we recieving the props as default value */}
 
  </>
  
);
}

export default App;