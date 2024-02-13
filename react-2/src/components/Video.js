import './Video.css'
//~ Here while receiving the prop we did not get views from App.js we can assign a default value in the views property, even if we will not get it will show that value
function Video({title, views='30K', time}) {
    let bg= 'dark'
    // let topic='react js'
  return (
    <>
    <div className={`card ${bg}`}>
    <img src="https://picsum.photos/200/300?random=1" alt="Dummy" />
     {/* <div className={bg}> {topic}</div> */}
      <div className='title'>{title}</div>
      <div className='views'>{views}</div>
      <div className='time'>{time}</div>
      </div>
      
    </>
  );
}
export default Video;
