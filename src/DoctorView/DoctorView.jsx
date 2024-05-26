import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./DoctorView.css"; // Make sure you create this CSS file for styling
import { Sidebar } from "../Sidebar/Sidebar";

const DoctorView = () => {
  const [users, setUsers] = useState([]);
  const [usersBp, setUsersBp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUserData, setShowUserData] = useState(true);
  const [showUserBP_Data, setShowUserBP_Data] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Access token not found");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("/api/doctor", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.users || []);
        setUsersBp(response.data.users_bp || []);
      } catch (error) {
        setError("Error fetching user data");
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleToggleUserData = () => {
    setShowUserData(true);
    // Ensure at least one section is shown by toggling UserBP_Data if necessary
    setShowUserBP_Data(false);
  };

  const handleToggleUserBP_Data = () => {
    setShowUserBP_Data(true);
    // Ensure at least one section is shown by toggling blood pressure if necessary
    setShowUserData(false);
  };
  return (
    <div className="doctor_view_maincontainer">
      <Sidebar />
      <div className="doctor-view-container">
        <h1>Doctor View </h1>
        <div className="btn_container">
          <button onClick={handleToggleUserData} className="bp_btn">
            Users Data
          </button>
          <button onClick={handleToggleUserBP_Data} className="weight_btn">
            Users Blood pressure Data
          </button>
        </div>
        {showUserData && (
          <div className="user-data">
            <h2>Users Data</h2>
            {users.length === 0 ? (
              <p>No user data available</p>
            ) : (
              <div>
                <div>
                  <div className="user_tr">
                    <div>Name</div>

                    <div>Phone Number</div>
                    <div>Email</div>
                    <div>Date of Birth</div>
                    <div>Height(cm)</div>
                    <div>Weight(kg)</div>
                    <div>Gender</div>
                  </div>
                </div>
                <div>
                  {users.map((user, index) => (
                    <div key={index} className="user_td">
                      <div>
                        {user.firstName} {user.lastName}
                      </div>

                      <div>{user.phoneNumber}</div>
                      <div>{user.email}</div>
                      <div>{user.dateOfBirth}</div>
                      <div>{user.height}</div>
                      <div>{user.weight}</div>
                      <div>{user.gender}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {showUserBP_Data && (
          <div className="user-bp-data">
            <h2>Users Blood Pressure Data</h2>
            {usersBp.length === 0 ? (
              <p>No blood pressure data available</p>
            ) : (
              <div>
                <div>
                  <div className="user_bp_tr">
                    <div>Name</div>
                    <div>Phone Number</div>
                    <div>Systolic</div>
                    <div>Diastolic</div>
                    <div>Pulse</div>
                    <div>Date</div>
                    <div>Time</div>
                  </div>
                </div>
                <div>
                  {usersBp.map((bp, index) => (
                    <div key={index} className="user_bp_td">
                      <div>
                        {bp.firstName} {bp.lastName}
                      </div>
                      <div>{bp.phoneNumber}</div>
                      <div>{bp.systolic}</div>
                      <div>{bp.diastolic}</div>
                      <div>{bp.pulse}</div>
                      <div>{bp.date}</div>
                      <div>{bp.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorView;
