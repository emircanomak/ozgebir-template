import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Index from "./Index";
import About from "./About";
import Table from "./Table";
import Login from "./Login";
import Users from "./Users";
import AddUser from "./AddUser";
import Courses from "./Courses";
import AddCourses from "./AddCourses";
import Exercise from "./Exercise";
import AddExercise from "./AddExercise";
import Contact from "./Contact";
import AddContact from "./AddContact";
import Appointments from "./Appointments"
import AddAppointment from "./AddAppointment"
import Services from "./Services";
import AddService from "./AddService";
import Equipment from "./Equipment";
import AddEquipment from "./AddEquipment";
import Profil from "./Profil";
import SSS from "./SSS";
import AddSSS from "./AddSSS";



function RoutePage() {
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="contact" element={<Contact />} />
        <Route path="addContact" element={<AddContact />} />
        <Route path="about" element={<About />} />
        <Route path="table" element={<Table/>} />
        <Route path="login" element={<Login/>} />
        <Route path="users" element={<Users/>} />
        <Route path="addUser" element={<AddUser/>} />
        <Route path="courses" element={<Courses/>} />
        <Route path="AddCourses" element={<AddCourses/>} />
        <Route path="exercise" element={<Exercise/>}/>
        <Route path="addExercise" element={<AddExercise/>}/>
        <Route path="appointments" element={<Appointments/>} />
        <Route path="addAppointment" element={<AddAppointment/>} />
        <Route path="services" element={<Services/>} />
        <Route path="Addservice" element={<AddService/>} />
        <Route path="equipment" element={<Equipment/>} />
        <Route path="AddEquipment" element={<AddEquipment/>} />
        <Route path="profil" element={<Profil/>} />
        <Route path="sss" element={<SSS/>} />
        <Route path="addsss" element={<AddSSS/>} />
      </Routes>
    </div>
  );
}
export default RoutePage;