import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.scss";

import { MdPeople, MdLibraryBooks } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCoins, FaEye } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import { BsPersonFillX, BsPersonCheckFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";

import { getUsers } from "../../services/userService";
import { User } from "../../types/user";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UserDetails from "../Users/UserDetails";

const UsersIcon = MdPeople as React.ComponentType<{ size?: number }>;
const ActiveUsersIcon = IoIosPeople as React.ComponentType<{ size?: number }>;
const LoanUsersIcon = MdLibraryBooks as React.ComponentType<{ size?: number }>;
const SavingsUsersIcon = FaCoins as React.ComponentType<{ size?: number }>; 
const TableIcon = MdOutlineFilterList as React.ComponentType<{ size?: number }>; 
const MoreIcon = FiMoreVertical as React.ComponentType<{ size?: number }>; 
const UserDetailsIcon = FaEye as React.ComponentType<{ size?: number }>;
const BlacklistIcon = BsPersonFillX as React.ComponentType<{ size?: number }>;
const ActivateIcon = BsPersonCheckFill as React.ComponentType<{ size?: number }>;

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userLoading, setUserLoading] = useState(true);
  const [formattedDate] = useState(new Date().toLocaleDateString());
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const paginationRef = useRef<HTMLDivElement>(null);

  const usersPerPage = 20;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setUserLoading(false);
    };
    fetchUsers();
  }, []);

  // Auto-scroll to active pagination button
  useEffect(() => {
    if (paginationRef.current) {
      const activeBtn = paginationRef.current.querySelector('.active');
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentPage]);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.dropdown-container')) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (userId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === userId ? null : userId);
    setUserDetails(users.find(user => user.userId === userId) || null);
  };

  const handleViewDetails = () => {
    setShowUserDetails(true);
    setOpenDropdown(null);
  };

  const handleBackToList = () => {
    setShowUserDetails(false);
    setUserDetails(null);
  };

  // Generate pagination buttons with ellipsis for large ranges
  const getPageButtons = () => {
    const totalPages = Math.ceil(users.length / usersPerPage);
    const buttons = [];
    const maxVisibleButtons = 5;

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (start > 2) buttons.push('...');
      for (let i = start; i <= end; i++) buttons.push(i);
      if (end < totalPages - 1) buttons.push('...');
      
      buttons.push(totalPages);
    }
    
    return buttons;
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          {!showUserDetails ? (
            <div className="container dashboard-container">
              <h2>Users</h2>
              
              <div className="dashboard-grid">
                <div className="stat-card primary">
                  <div className="stat-header">
                    <span className="dashboard-icon-holder1"><UsersIcon size={25}/></span>
                  </div>
                  <div>Users</div>
                  <div className="stat-value">2,453</div>
                </div>

                <div className="stat-card primary">
                  <div className="stat-header">
                    <span className="dashboard-icon-holder2"><ActiveUsersIcon size={25}/></span>
                  </div>
                  <div>Active Users</div>
                  <div className="stat-value">2,453</div>
                </div>

                <div className="stat-card primary">
                  <div className="stat-header">
                    <span className="dashboard-icon-holder3"><LoanUsersIcon size={25}/></span>
                  </div>
                  <div>Users with Loan</div>
                  <div className="stat-value">12,453</div>
                </div>

                <div className="stat-card primary">
                  <div className="stat-header">
                    <span className="dashboard-icon-holder4"><SavingsUsersIcon size={25}/></span>
                  </div>
                  <div>Users with Savings</div>
                  <div className="stat-value">102,453</div>
                </div>
              </div>

              <div className="table-container">
                <table className="user-table">
                  <thead>
                    <tr className="thead">
                      <th scope="col" className="thead-item">ORGANIZATION <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">USER NAME <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">EMAIL <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">PHONE NUMBER <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">DATE JOINED <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">STATUS <TableIcon size={20} /></th>
                      <th scope="col" className="thead-item">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user) => (
                      <tr key={user.userId}>
                        <td data-label="Organization">{user.employmentSector}</td>
                        <td data-label="User Name">{user.userName}</td>
                        <td data-label="Email">{user.email}</td>
                        <td data-label="Phone Number">{user.phoneNumber}</td>
                        <td data-label="Date Joined">{formattedDate}</td>
                        <td data-label="Status">
                          <span className={`status-badge ${user.employmentStatus === 'true' ? 'active' : 'inactive'}`}>
                            {user.employmentStatus === 'true' ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td>
                          <div className="dropdown-container">
                            <button 
                              className="dropdown-toggle" 
                              onClick={(e) => toggleDropdown(user.userId, e)}
                              aria-label="Actions"
                            >
                              <MoreIcon size={20} />
                            </button>
                            {openDropdown === user.userId && (
                              <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={handleViewDetails}>
                                  <UserDetailsIcon /> View Details
                                </button>
                                <button className="dropdown-item">
                                  <BlacklistIcon /> Blacklist User
                                </button>
                                <button className="dropdown-item">
                                  <ActivateIcon /> Activate User
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {userLoading && (
                  <div className="loading">
                    <p>Loading users...</p>
                  </div>
                )}

                <div className="pagination-container" ref={paginationRef}>
                  <button 
                    className="pagination-nav"
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  
                  <div className="pagination-scroll">
                    {getPageButtons().map((item, index) => (
                      <React.Fragment key={index}>
                        {item === '...' ? (
                          <span className="pagination-ellipsis">...</span>
                        ) : (
                          <button
                            onClick={() => paginate(Number(item))}
                            className={currentPage === item ? 'active' : ''}
                            aria-current={currentPage === item ? 'page' : undefined}
                          >
                            {item}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <button 
                    className="pagination-nav"
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container dashboard-container">
              <UserDetails 
                user={userDetails} 
                onBack={handleBackToList} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;