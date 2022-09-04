// CreateTutorial Component for adding new tutorial

// Import Modules
import React, { useState } from "react";
import axios from "axios";
import TutorialForm from "./StudentForm";

const CreateTutorial = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .post("http://localhost:3000/students/create-student", studentObject)
      .then((res) => {
        if (res.status === 200) alert("Student successfully create");
        else Promise.reject();
      })
      .catch((e) => alert("Something went wrong"));
  };
  return (
    <TutorialForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      CreateTutorial
    </TutorialForm>
  );
};

export default CreateTutorial;
