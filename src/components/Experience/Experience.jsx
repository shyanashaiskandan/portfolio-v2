import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bmo from "/assets/experience/bmologo.png";
import manulife from "/assets/experience/manulife logo.png";
import gov from "/assets/experience/governmentlogo.png";
import styles from "./Experience.module.css";
import empireLife from "/assets/experience/empirelife.png";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1 className={styles.title}><center>Experience</center></h1>
      <VerticalTimeline lineColor='black'>
        
        {/* Empire Life */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element"
          contentStyle={{
            background: '#d97b9f',
            color: 'white',
            border: '2px solid black',
          }}
          contentArrowStyle={{
            borderRight: '7px solid black', 
          }}
          date={<span className={styles.date}>January 2025 - April 2025</span>}
          iconStyle={{ background: '#b16687', color: 'white' }}
        >
          <center><img src={empireLife} alt="gov logo" className={styles.empireLife} /></center>
          <center><h3 style={{ color: '#ffffff' }}>Software Developer</h3></center>
          <center><h4 style={{ color: '#f9f1f1' }}>Empire Life</h4></center>
        </VerticalTimelineElement>
        
        {/* Ministry of Finance */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element"
          contentStyle={{
            background: '#d97b9f',
            color: 'white',
            border: '2px solid black',
          }}
          contentArrowStyle={{
            borderRight: '7px solid black', 
          }}
          date={<span className={styles.date}>January 2024 - April 2024</span>}
          iconStyle={{ background: '#b16687', color: 'white' }}
        >
          <center><img src={gov} alt="gov logo" className={styles.govlogo} /></center>
          <center><h3 style={{ color: '#ffffff' }}>Junior Programmer</h3></center>
          <center><h4 style={{ color: '#f9f1f1' }}>Ministry of Finance</h4></center>
        </VerticalTimelineElement>

        {/* Manulife */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element"
          contentStyle={{
            background: '#d97b9f',
            color: 'white',
            border: '2px solid black',
          }}
          contentArrowStyle={{
            borderRight: '7px solid black', 
          }}
          date={<span className={styles.date}>May 2023 - August 2023</span>}
          iconStyle={{ background: '#b16687', color: 'white' }}
        >
          <center><img src={manulife} alt="manulife logo" className={styles.manulife} /></center>
          <center><h3 style={{ color: '#ffffff' }}>Salesforce Engineer</h3></center>
          <center><h4 style={{ color: '#f9f1f1' }}>Manulife</h4></center>
        </VerticalTimelineElement>

        {/* Bank of Montreal - Systems Analyst */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element"
          contentStyle={{
            background: '#d97b9f',
            color: 'white',
            border: '2px solid black',
          }}
          contentArrowStyle={{
            borderRight: '7px solid black', 
          }}
          date={<span className={styles.date}>September 2022 - December 2022</span>}
          iconStyle={{ background: '#b16687', color: 'white' }}
        >
          <center><img src={bmo} alt="BMO logo" className={styles.bmo} /></center>
          <center><h3 style={{ color: '#ffffff' }}>Systems and Applications Analyst</h3></center>
          <center><h4 style={{ color: '#f9f1f1' }}>Bank of Montreal</h4></center>
        </VerticalTimelineElement>

        {/* Bank of Montreal - QA Analyst */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element"
          contentStyle={{
            background: '#d97b9f',
            color: 'white',
            border: '2px solid black',
          }}
          contentArrowStyle={{
            borderRight: '7px solid black', 
          }}
          date={<span className={styles.date}>January 2022 - April 2022</span>}
          iconStyle={{ background: '#b16687', color: 'white' }}
        >
          <center><img src={bmo} alt="BMO logo" className={styles.bmo} /></center>
          <center><h3 style={{ color: '#ffffff' }}>QA Analyst</h3></center>
          <center><h4 style={{ color: '#f9f1f1' }}>Bank of Montreal</h4></center>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
