import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bmo from "./bmologo.png"
import manulife from "./manulife logo.png"
import gov from "./governmentlogo.png"
import styles from "./Experience.module.css"


const Experience = () => {
  return (
    <section id="experience" className = {styles.container}>
      
      <h1 className = {styles.title}><center>Experience</center></h1>
      <VerticalTimeline>
    
      <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="January 2024 - April 2024"
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <center><img src= {gov} alt="gov logo" className={styles.govlogo}/></center>
          <center><h3>Junior Programmer</h3></center>
          <center><h4>Ministry of Finance</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="May 2023 - August 2023"
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <center><img src= {manulife} alt="manulife logo" className={styles.manulife}/> </center>
          <center><h3>Salesforce Engineer</h3></center>
          <center><h4>Manulife</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="September 2022 - December 2022"
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <center><img src= {bmo} alt="BMO logo" className={styles.bmo}/> </center>
          <center><h3>Systems and Applications Analyst</h3></center>
          <center><h4>Bank of Montreal</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="January 2022 - April 2022"
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <center><img src= {bmo} alt="BMO logo" className={styles.bmo}/> </center>
          <center><h3 >QA Analyst</h3></center>
          <center><h4>Bank of Montreal</h4></center>
        </VerticalTimelineElement> 

    </VerticalTimeline> 
    </section>
  )
}

export default Experience
