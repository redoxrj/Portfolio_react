import React from 'react'
import '../styles/timeline.scss';
import data from '../assets/data.json'

const Timeline = () => {
  return (
    <div id='timeline'>
        <div className="timelineBox">
            {data.projects.map((item,i)=>(
                <TimelineItem key={item.title} heading={item.title} text={item.date} index={i}/>
            ))}

        </div>
      
    </div>
  )
}

const TimelineItem = ({heading,text,index})=>(
    <div className={`timelineItem ${index%2===0?'leftTimeline':'rightTimeline'}`}>
       <div>
       <h2>{heading}</h2>
        <p>{text}</p>
       </div>

    </div>
)

export default Timeline
