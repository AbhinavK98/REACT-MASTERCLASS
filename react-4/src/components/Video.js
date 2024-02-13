import './Video.css'
//~ Here while receiving the prop we did not get views from App.js we can assign a default value in the views property, even if we will not get it will show that value
function Video({title, views='30K', time, verified,id }) {
    let bg= 'dark'
    let Channel= 'Abhinav V-log'

    // let topic='react js'
  return (
    <>
    <div className={`card ${bg}`}>
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="Dummy" />
     {/* <div className={bg}> {topic}</div> */}
      <div className='title'>{title}</div>
      <div className='channel'>{Channel}{verified && '✅'} </div>
      <div className='views'>{views}</div>
      <div className='time'>{time}</div>
      </div>  
    </>
  );
}
export default Video;

//~Here we have seen concept of conditional rendering {Channel}{verified ? '✅': null}

//~In place of {verified ? '✅'}. we have used {verified && '✅': null}, so in this case if verified is not true it will not go further to check which is called short circuiting. So, in this case benefit is if verified is not true it will not go further to check which is called short circuiting. The only risk is that if we are using any boolean value it will print that.

