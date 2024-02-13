//~ Assignment 1 : If we delete node_modules. How to run our app again successfully ?

//~ Assignment 2 : How to remove double console.logs from React ? [ it is not needed in real life to remove them, its just an assignment problem ]. [ Hint: Some special Component at top level is of App is causing it ]. We explore more about - why this is needed in later videos.

//~ Special Assignments ==============

//~ Assignment 3 : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

 import './App.css';

function App() {
  let name='react-app'
  let className='App-header';
  console.log('App');
  return (
    
    <div className="App">
    <div className={className}>
    {name}
     'Namastey' Sir!!
     <Demo />
     </div>
    </div>
  );
}

function Demo() {
  console.log('Demo');
  return (
    <div className="App">
    <div className='App-header'>
    Demo... 
     </div>
    </div>
  );
}

export default App;
