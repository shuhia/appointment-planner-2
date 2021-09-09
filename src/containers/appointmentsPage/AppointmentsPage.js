import React, { useState } from "react";
import App from "../../App";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  setAppointment,
  contacts,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    setAppointment(title, contact, date, time);
  };

  const appointmentProps = {
    title,
    setTitle,
    contact,
    contacts,
    setContact,
    date,
    setDate,
    time,
    setTime,
    appointments,
    setAppointment,
    handleSubmit,
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...appointmentProps}></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments}></TileList>
      </section>
    </div>
  );
};
