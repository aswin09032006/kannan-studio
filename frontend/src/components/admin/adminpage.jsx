import React, { useEffect, useState } from "react";
import Table from "./table";
import ContactTable from "./contactTable";
import "./adminpage.css";
import logoImg from "../../assets/logo.png";

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [reservationDetails, setReservationDetails] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/table");
        const data = await response.json();
        if (response.ok) {
          console.log("Data fetched successfully", data);
          setReservationDetails(data.reservation_details || []);
          setContactDetails(data.contact_details || []);
        } else {
          console.error({ Error: data.error });
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <h3>KANNAN STUDIO</h3>
        <p>Admin Dashboard</p>
      </div>
      <div className="admin-page-content">
        <div className="admin-page-reservation-details">
          <Table
            title="Reservation details"
            items={reservationDetails}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </div>
        <div className="admin-page-contact-details">
          <ContactTable
            title="Contact details"
            items={contactDetails}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
