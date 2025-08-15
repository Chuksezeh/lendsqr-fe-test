import React from "react";
import "./Sidebar.scss";
import { FaMoneyBillWave, FaTachometerAlt, FaUsers, FaUserShield } from "react-icons/fa";
import { RiShoppingBag4Line, RiArrowDropDownLine,  RiExchangeFundsLine, RiExchangeBoxFill, RiRecordCircleLine } from "react-icons/ri";
import { MdOutlineSavings,  MdOutlineSave, MdDynamicFeed,  MdManageAccounts } from "react-icons/md";
import { BsCassette, BsPersonFillCheck} from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { TbMoneybag, TbTransactionPound } from "react-icons/tb";
import { LiaHandHoldingUsdSolid, LiaClipboardListSolid } from "react-icons/lia";
import { BsPersonX } from "react-icons/bs";
import { LuChartColumn } from "react-icons/lu";


import { HiUsers } from "react-icons/hi2";
import { TiHomeOutline } from "react-icons/ti";
import lendsqrLogo from "../../Images/lendsqr-logo-removebg-preview.png";


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

 const FropDownIcon = RiArrowDropDownLine as React.ComponentType<{ size?: number }>;
const FaUsersIcon =  RiShoppingBag4Line as React.ComponentType<{ size?: number }>;
const  DashboardIcon =  TiHomeOutline  as React.ComponentType<{ size?: number }>;
const  UsersIcon =  HiUsers  as React.ComponentType<{ size?: number }>;
const  GauratorIcon =  FaUsers  as React.ComponentType<{ size?: number }>;
const  LoanIcon =  TbMoneybag  as React.ComponentType<{ size?: number }>;
const  DecisionIcon =  FaRegHandshake  as React.ComponentType<{ size?: number }>;
const  SavingsIcon =  MdOutlineSavings  as React.ComponentType<{ size?: number }>;
const  LoanRequestIcon =  LiaHandHoldingUsdSolid  as React.ComponentType<{ size?: number }>;
const  WhiteListIcon =  BsPersonFillCheck as React.ComponentType<{ size?: number }>;
const  KarmaIcon =   BsPersonX as React.ComponentType<{ size?: number }>;
const  SavingsProductIcon =   MdOutlineSave as React.ComponentType<{ size?: number }>;
const  FeesChargesIcon =   MdDynamicFeed as React.ComponentType<{ size?: number }>;
const  TransactionsIcon =   TbTransactionPound as React.ComponentType<{ size?: number }>;
const  ServicesIcon =   RiExchangeFundsLine as React.ComponentType<{ size?: number }>;
const  ServiceAccountIcon =   MdManageAccounts as React.ComponentType<{ size?: number }>;
const  SettlementsIcon =   BsCassette as React.ComponentType<{ size?: number }>;
const  ReportIcon =   LuChartColumn as React.ComponentType<{ size?: number }>;
const  PreferencesIcon =   RiExchangeBoxFill as React.ComponentType<{ size?: number }>;
const  FeesIcon =   RiRecordCircleLine as React.ComponentType<{ size?: number }>;
const  LogsIcon =   LiaClipboardListSolid as React.ComponentType<{ size?: number }>;




const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {




  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
  <div className="sidebar-header-img-div"> 
    <div><img src={lendsqrLogo} style={{width:"50px"}} className="logo-img"/> </div>
    <div className="lend-brand-name"> LendSqr</div>    
    </div>  
        <button className="close-btn" onClick={toggleSidebar}>×</button>
      </div>
      <nav>
        <ul className="sidebar-menu-list">
          <li>
            <FaUsersIcon size={25}  /> 
           Switch Organization <FropDownIcon size={25}/> </li>
          <li>
          <DashboardIcon size={25} />   
          Dashboard</li>
          <li>
    
           
           Customers</li>
          <li>
           <UsersIcon size={25} />  
          Users</li>
          <li>
           <GauratorIcon size={25} />  
            Gaurantors
          </li>
          <li>
           <LoanIcon size={25} />  
            Loans
          </li>
           <li>
           <DecisionIcon size={25} />  
            Desicion Models
          </li>
           <li>
           <SavingsIcon size={25} />  
            Savings
          </li>
           <li>
           <LoanRequestIcon size={25} />  
            Loan Requests
          </li>
          <li>
           <WhiteListIcon  size={25} />  
            Whitelist
          </li>
          <li>
           <KarmaIcon size={25} />  
            Karma
          </li>
          <li>Businesses</li>
           <li>
           <FaUsersIcon size={25} />  
            Organization
          </li>
           <li>
           <LoanIcon size={25} />  
            Loan Products
          </li>
           <li>
           <SavingsProductIcon size={25} />  
            Savings Products
          </li>
          <li>
           <FeesChargesIcon size={25} />  
            Fees and Charges
          </li>
          <li>
           <TransactionsIcon size={25} />  
            Transactions
          </li>
           <li>
           <ServicesIcon  size={25} />  
            Services
          </li>
          <li>
           <ServiceAccountIcon   size={25} />  
            Service Account
          </li>
           <li>
           <SettlementsIcon    size={25} />  
            Settlements 
          </li>
           <li>
           <ReportIcon    size={25} />  
            Reports
          </li>
           <li>
            Settings
          </li>
          <li>
           <PreferencesIcon    size={25} />  
            Preferences
          </li>
           <li>
           <FeesIcon    size={25} />  
            Fees and Pricing
          </li>
          <li>
           <LogsIcon    size={25} />  
            Audit Logs
          </li>
          
          
          </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
