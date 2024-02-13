import Video from "./components/Video";
import "./App.css";
import Videos from "./data/Data"
//~ Here we are passing props in different way first we have  created object and used spread operator and then we have simply defined it without using object. We will receive this props in Video component
function App() {

  return (
    <>
      <div className="App">
        <div className="Videos">{Videos.map((video) => 
          <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified} />
        )
      }</div>
      </div>

      {/**
      <Video {...obj1} />
      <Video title="Vlog 2" views="100K" time="9 months ago" verified={false} />
      <Video title="Vlog 3" time="9 months ago" verified={true} />{" "} */}
      {/** //~Here even if we are not passing any value for view props still we have the capability to define it where we recieving the props as default value */}
    </>
  );
}

export default App;
