import React, { useEffect, useState } from 'react';
import '../Styles/Main.css';
import Skrate from '../Styles/Skrate.png';
import Shuffle from '../Styles/shuffle.svg';
import Home from '../Styles/home.svg';


const Main = () =>{
    const [user,setUser] = useState('');
    const [dashboardStats,setDashboardStats] = useState({});
    const [jobPostings,setJobPostings] = useState([]);
    const [upcomingSessions, setUpcomingSessions] = useState([]);

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
        return 'Hello World'
    }

    useEffect(()=>{
        console.log('I ran ')
        fetchUsers()
    });
    return(
        <div className='container'>
        <div className='header'>
            <div className="header-logo">
                <img src={Skrate} alt="logo" />
            </div>
            <div className='header-right-container'>
                <div className="header-sign-out-button">
                    SignOut
                </div>
                <div className="header-user-details">
                    <div className="image-user">
                        <img src={''} alt="user" />
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
                <div className='menu-item'>
                    <img src={Shuffle} alt="shuffle" />
                    <div>Shuffle</div>
                </div>
            </div>
            <div className='content'>
                <div className='left-content'>
                    <div className='content-box overview'>
                        <div className='content-box-header'>
                            {populateOverView(dashboardStats)}
                        </div>
                    </div>
                    <div className='content-box upcomig'>
                        <div className='content-box-header'>
                            Upcoming Sessions
                        </div>
                    </div>
                </div>
                <div className='right-content '>
                    <div className='content-box jobs'>
                        <div className='content-box-header'>
                            Jobs
                        </div>
                    </div>
                </div>
            </div> 

        </div>
        </div>
    )
}

export default Main;