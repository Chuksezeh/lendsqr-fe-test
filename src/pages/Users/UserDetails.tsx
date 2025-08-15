import React from "react";
import "./UserDetails.scss";
import { User } from "../../types/user";
import imagePlaceHolder from "../../Images/image-placeholder-removebg-preview.png";
import { FaArrowLeftLong } from "react-icons/fa6";

// Define the User interface

const BackIcon = FaArrowLeftLong as React.ComponentType<{ size?: number }>;

interface UserDetailsProps {
  user: User | null;
  onBack: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onBack }) => {
  if (!user) {
    return (
      <div className="details-container">
        <h4 style={{ cursor: "pointer" }} onClick={onBack}>
          <BackIcon /> Back to Users
        </h4>
        <p>No user selected</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h4 style={{ cursor: "pointer" }} onClick={onBack}>
        <BackIcon /> Back to Users
      </h4>
      <div className="user-details-header-top">
        <h2 style={{ color: "#213F7D" }} className="userdetailh2">User Details</h2>
        <div className="user-details-header-btns">
          <button className="hearder-btn1">BLACKLIST</button>
          <button className="hearder-btn2">ACTIVATE USER</button>
        </div>
      </div>

      <div className="stat-card-details">
        <div className="details-prof-container">
          <div>
            <img src={imagePlaceHolder} className="place-image-details" />
          </div>
          <div>
            <h3>{user.userName}</h3>
            <p>{user.userId}</p>
          </div>
          <div className="top-line"></div>
          <div>
            User's Tier
            <p>***</p>
          </div>
          <div className="top-line"></div>
          <div>
            <h3>₦{user.monthlyIncome}</h3>
            <p>{user.bvn}</p>
          </div>
        </div>
        <br />
        <br />
        <ul className="details-list">
          <li>
            <span className="details-list-span">General Details</span>
          </li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>

      {/* Personal Information */}
      <div className="stat-card-details">
        <div>
          <h3 className="details-title-box">Personal Information</h3>
          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>FULL NAME</span>
              <p>{user.userName}</p>
            </div>
            <div className="details-list-names-div">
              <span>PHONE NUMBER</span>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="details-list-names-div">
              <span>EMAIL ADDRESS</span>
              <p>{user.email}</p>
            </div>
            <div className="details-list-names-div">
              <span>GENDER</span>
              <p>{user.gender}</p>
            </div>
          </div>

          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>MARITAL STATUS</span>
              <p>{user.maritalStatus}</p>
            </div>
            <div className="details-list-names-div">
              <span>CHILDREN</span>
              <p>{user.children}</p>
            </div>
            <div className="details-list-names-div">
              <span>TYPE OF RESIDENCE</span>
              <p>{user.residenceType}</p>
            </div>
          </div>
        </div>
        <hr className="details-hr" />

        {/* Education and Employment */}
        <div>
          <h3 className="details-title-box">Education and Employment</h3>
          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>LEVEL OF EDUCATION</span>
              <p>{user.education}</p>
            </div>
            <div className="details-list-names-div">
              <span>EMPLOYMENT STATUS</span>
              <p>{user.employmentStatus}</p>
            </div>
            <div className="details-list-names-div">
              <span>SECTOR OF EMPLOYMENT</span>
              <p>{user.employmentSector}</p>
            </div>
            <div className="details-list-names-div">
              <span>DURATION EMPLOYMENT</span>
              <p>{user.employmentDuration}</p>
            </div>
          </div>

          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>OFFICIAL MAIL</span>
              <p>{user.officeEmail}</p>
            </div>
            <div className="details-list-names-div">
              <span>MONTHLY INCOME</span>
              <p>₦{user.monthlyIncome}</p>
            </div>
            <div className="details-list-names-div">
              <span>LOAN REPAYMENT</span>
              <p>₦{user.loanRepayment}</p>
            </div>
          </div>
        </div>
        <hr className="details-hr" />

        {/* Socials */}
        <div>
          <h3 className="details-title-box">Socials</h3>
          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>TWITTER</span>
              <p>{user.twitter}</p>
            </div>
            <div className="details-list-names-div">
              <span>FACEBOOK</span>
              <p>{user.facebook}</p>
            </div>
            <div className="details-list-names-div">
              <span>INSTAGRAM</span>
              <p>{user.instagram}</p>
            </div>
          </div>
        </div>
        <hr className="details-hr" />

        {/* Guarantor */}
        <div>
          <h3 className="details-title-box">Guarantor</h3>
          <div className="details-list-names">
            <div className="details-list-names-div">
              <span>FULL NAME</span>
              <p>{user.guarantorFullName}</p>
            </div>
            <div className="details-list-names-div">
              <span>PHONE NUMBER</span>
              <p>{user.guarantorPhone}</p>
            </div>
            <div className="details-list-names-div">
              <span>EMAIL ADDRESS</span>
              <p>{user.guarantorEmail}</p>
            </div>
            <div className="details-list-names-div">
              <span>RELATIONSHIP</span>
              <p>{user.guarantorRelationship}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;