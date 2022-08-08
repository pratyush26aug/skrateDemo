import React, { useEffect, useState } from 'react';
import '../Styles/Main.css';
import Skrate from '../Styles/Skrate.png';
import Shuffle from '../Styles/shuffle.svg';
import Arrow from '../Styles/Arrow.png';
import Home from '../Styles/home.svg';
import UserImage from '../Styles/User.png';
import {
    useNavigate,
  } from "react-router-dom";
import { unAuthUser } from './../helpers/auth';

const Main = () =>{
    const [user,setUser] = useState('');
    const [dashboardStats,setDashboardStats] = useState({});
    const [jobPostings,setJobPostings] = useState([]);
    const [upcomingSessions, setUpcomingSessions] = useState([]);
    const navigate = useNavigate();

    const fetchUsers =  () => {
        fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
        .then((response) => response.json())
        .then((response)=>{
                console.log(response)
                let {dashboard_stats, full_name,job_postings,upcoming_sessions} = response;
                setUser(full_name);
                setDashboardStats(dashboard_stats);
                setJobPostings(job_postings);
                setUpcomingSessions(upcoming_sessions);
            })
    }  

    const populateOverView = (dashboard_stats)=> {
        let keys = Object.keys(dashboard_stats)
        return keys.map(key =>{
            let label = key.split('_').join(' ');
            return (
                <div className='overview-card-container'>
                    <div className='label'>{label}</div>
                    <div className='value'>{dashboard_stats[key]}</div>
                </div>
            )
        })
    }

    const shuffleArray = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const shuffle = (e)=>{
        // shuffling upcoming sessions .
        let temp = upcomingSessions[0];
        let new_upcoming_seesion = [upcomingSessions[1],temp];
        setUpcomingSessions(new_upcoming_seesion);
        // randomly shuffling new jobs 
        setJobPostings(shuffleArray(jobPostings));
        // shuffling overview
        let overview_keys = Object.keys(dashboardStats);
        let shuffled_overview_keys = shuffleArray(overview_keys);
        let newDashboardStats = {}
        shuffled_overview_keys.map(item => newDashboardStats[item] = dashboardStats[item]);
        setDashboardStats(newDashboardStats);
    }

    const populateJobPosting = (job_postings)=> {
        return job_postings.map( item => {
            return(
              <div className='jobposting-card-container'>
                <div className='jobposting-image'>
                    <img src={UserImage} alt=""/>
                </div>
                <div className='jobposting-image'>
                    <div className='role'>{item.role}</div>
                    <div className='organization'>{item.organization_name}</div>
                    <div className='location'>{item.location}</div>
                </div>
                <div className=''>{'2 Days ago'}</div>
                <div className='organization'>
                    <img src={Arrow} alt=""/>
                </div>
              </div>
            )
        });
    }

    const populateUpcomingSessions = (upcoming_sessions)=> {
        return upcoming_sessions.map( item =>{
            return(
                <div className='upcoming-session-container'>
                    <div className='upcoming-user-image'>
                         <img src={UserImage} alt=""/>
                    </div>
                    <div className='jobposting-image'>
                         <div className='mentor-name'>{item.mentor_name}</div>
                    </div>
                    <div className='time'>
                         <div className='timings'>{item.timings}</div>
                         <div className='date'>{item.date}</div>
                    </div>
                    <div className='button'>{item.session_type}</div>
                    <div className='Arrow'>
                         <img src={Arrow} alt=""/>
                    </div>
                </div>
            )
        })
    }

    const onLogoutClick = (e) => {
        unAuthUser();
        navigate('/')
    }

    useEffect(()=>{
        console.log('I ran ')
        fetchUsers()
    },[]);
    return(
        <div className='container'>
        <div className='header'>
            <div className="header-logo">
                <img src={Skrate} alt="logo" />
            </div>
            <div className='header-right-container'>
                <div className="header-sign-out-button" onClick={(e)=>onLogoutClick(e)}>
                      Sign Out  
                </div>
                <div className="header-user-details">
                    <div className="image-user">
                        <img src={UserImage} alt="user" />
                    </div>
                    <div className="name-user">
                        <span>{user}</span>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='body'>
            <div className='side-bar'>
                <div className='menu-item menu-item-active'>
                    <img src={Home} alt="home" />
                    <div>Home</div>
                </div>
                <div className='menu-item' onClick={(e)=>shuffle(e)}>
                    <img src={Shuffle} alt="shuffle" />
                    <div>Shuffle</div>
                </div>
            </div>
            <div className='content'>
                <div className='left-content'>
                    <div className='content-box overview'>
                        <div className='content-box-header'>
                            Overview
                        </div>
                        <div className='content-box-body'>
                            {populateOverView(dashboardStats)}
                        </div>
                    </div>
                    <div className='content-box upcomig'>
                        <div className='content-box-header'>
                            Upcoming Sessions
                        </div>
                        <div className='content-box-body'>
                            {populateUpcomingSessions(upcomingSessions)}
                        </div>
                    </div>
                </div>
                <div className='right-content '>
                    <div className='content-box jobs'>
                        <div className='content-box-header'>
                            Jobs
                        </div>
                        <div className='content-box-body overview'>
                            {populateJobPosting(jobPostings)}
                        </div>
                    </div>
                </div>
            </div> 

        </div>
        </div>
    )
}

export default Main;