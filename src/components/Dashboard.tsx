import Slogocsm from "../assets/Logo_dako.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Transaction {
    id: number;
    date: string;
    time: string;
    status: string;
    section: string;
  }

function Dashboard(){
    const [selectedItem, setSelectedItem] = useState<string>('Pending');
    const [selectedSection, setSelectedSection] = useState<string>('All');
  
    const handleButtonClick = (item: string) => {
      setSelectedItem(item);
    };
  
    const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSection(event.target.value);
    };
  

      
    const pendingItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending',
          section: 'CHEM1H1'
          
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Pending',
            section: 'CHEM1H1'
        },
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending',
          section: 'CHEM1H2'
        },
        
       
      ]

      const recentItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Rejected',
          section: 'CHEM1H1'
        },
        {
            id: 1035,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Rejected',
            section: 'CHEM1H2'
          },
        {
            id: 1036,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Accepted',
            section: 'CHEM1H1'
        },
        {
            id: 1037,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Accepted',
            section: 'CHEM1H3'
        }
        
        
       
      ]

      const allSections = Array.from(new Set([...pendingItems.map(item => item.section), ...recentItems.map(item => item.section)]));

      const filteredPendingItems: Transaction[] = selectedSection === 'All' ? pendingItems : pendingItems.filter(item => item.section === selectedSection);
      const filteredRecentItems: Transaction[] = selectedSection === 'All' ? recentItems : recentItems.filter(item => item.section === selectedSection);
    
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

      {/* Dropdown filter */}
      <div className="dropdown">
        <div className="sectionFilterLabelCont"><label htmlFor="sectionFilterLabel">Filter by: </label></div>
        <select id="sectionFilter" onChange={handleSectionChange} value={selectedSection}>
          <option value="All">All Sections</option>
          {allSections.map(section => (
            <option key={section} value={section}>{section}</option>
          ))}
        </select>
      </div>

      {/* Transaction list */}
      <div className="transList">
        {selectedItem === 'Pending' && filteredPendingItems.map((item) => (
          <Link key={item.id} to={`/transaction/${item.id}`} className="transactionContainer">
            <div className="transFirstRow">
              <div className="transactionID">
                Transaction ID {item.id}
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
        ))}

        {selectedItem === 'Recent' && filteredRecentItems.map((item) => (
          <Link key={item.id} to={item.status === 'Rejected' ? `/transaction/rejected/${item.id}` : `/transaction/accepted/${item.id}`} className="transactionContainer">
            <div className="transFirstRow">
              <div className="transactionID">
                Transaction ID {item.id}
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
        ))}
      </div>
    </div>
  );
}
export default Dashboard;