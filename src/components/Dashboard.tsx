import Slogocsm from "../assets/Logo_dako.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Dashboard(){
    const [selectedItem, setSelectedItem] = useState('Pending');
    const handleButtonClick = (item: string) => {
        setSelectedItem(item);
      };

    const pendingItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending'
        }
        
       
      ]

      const recentItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Rejected'
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Accepted'
        }
        
        
       
      ]
    
return(
    <div className="viewDashboard">
        <div className="Header">
            <div className="logocont">
                <img src={Slogocsm} className="SLogocsm"/>
            </div>
            <div className="firstRow">
                <div className="profilecont">
                    <div className="AccountLogo">
                        <AccountCircleIcon/>
                    </div>
                    <div className="userID">2020302977</div>
                </div>

                <Link to="/" className="logoutcont">
                    <div className="logoLogout">
                        <LogoutIcon/>
                    </div>
                    <div className="logoutLabel">Logout
                    </div>
                </Link>
            </div>
            <div className="secondRow">
                Hi! Jerilyn Yare
            </div>
        </div>
        <div className="navigation">


            <Link to="/Dashboard" className={`buttonCont ${selectedItem === 'Pending' ? 'button-active' : ''}`}
                 onClick={() => handleButtonClick('Pending')}>


                <div className="navLogo">
                    <HourglassBottomIcon/>
                </div>
                <div className="navLabel">
                    Pending
                </div>
            </Link>





            <Link to="/Dashboard" className={`buttonCont ${selectedItem === 'Recent' ? 'button-active' : ''}`}
                 onClick={() => handleButtonClick('Recent')}>
                <div className="navLogo">
                    <WatchLaterIcon/>
                </div>
                <div className="navLabel">
                    Recent
                </div>
            </Link>
        </div>
        <div className="transList">
        {selectedItem === 'Pending' && (
            pendingItems.map((item) => (
            <Link to={`/transaction/${item.id}`} className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                    Transaction ID{item.id}
                    </div>
                    <div className="currentStatus">
                    <div className="iconCurrentStatus">
                        <CircleIcon />
                    </div>
                    <div className='penStatus'>{item.status}</div>
                    </div>
                </div>
                <div className="transSecondRow">
                    <div className="timeanddate">
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                    </div>
                </div>
                <div className="transThirdRow">
                    Tap to View
                </div>
            </Link>
            ))
            )}

        {selectedItem === 'Recent' && (
            recentItems.map((item) => (
            <Link to={item.status === 'Rejected' ? `/transaction/rejected/${item.id}` : `/transaction/accepted/${item.id}`} className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                    Transaction ID{item.id}
                    </div>
                    <div className="currentStatus">
                        <div className={item.status === 'Rejected' ? 'iconRejStatus' : 'iconAccStatus'}>
                            <CircleIcon />
                            </div>
                        <div className={item.status === 'Rejected' ? 'rejStatus' : 'accStatus'}>{item.status}</div>
                    </div>
                </div>
                <div className="transSecondRow">
                    <div className="timeanddate">
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                    </div>
                </div>
                <div className="transThirdRow">
                    Tap to View
                </div>
            </Link>
            ))
            )}
        </div>
    </div>
    
);
}
export default Dashboard;