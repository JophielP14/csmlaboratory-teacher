import Slogocsm from "../assets/Logo_dako.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CircleIcon from '@mui/icons-material/Circle';

function Dashboard(){
    
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
                <div className="logoutcont">
                    <div className="logoLogout">
                        <LogoutIcon/>
                    </div>
                    <div className="logoutLabel">Logout
                    </div>
                </div>
            </div>
            <div className="secondRow">
                Hi! Jerilyn Yare
            </div>
        </div>
        <div className="navigation">
            <div className="buttonCont">
                <div className="navLogo">
                    <HourglassBottomIcon/>
                </div>
                <div className="navLabel">
                    Pending
                </div>
            </div>
            <div className="buttonCont">
                <div className="navLogo">
                    <WatchLaterIcon/>
                </div>
                <div className="navLabel">
                        Recent
                </div>
            </div>
        </div>
        <div className="transList">
            <div className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                    Transaction ID #500000000
                    </div>
                    <div className="currentStatus">
                    <div className="iconCurrentStatus">
                        <CircleIcon />
                    </div>
                    <div className='penStatus'>   Status </div>
                    </div>
                </div>
                <div className="transSecondRow">
                    <div className="timeanddate">
                    <div> DATE</div>
                    <div>TIME</div>
                    </div>
                </div>
                <div className="transThirdRow">
                    Tap to View
                </div>
            </div>
        </div>
    </div>
    
);
}
export default Dashboard;