import React from "react";
import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phonenumber: "" }

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  },[contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    
    if (form.fullname === "" || form.phonenumber === "") {
      return false;
    }
    addContact([...contacts, form]);
    console.log(form);
  };

  return (
    <form onClick={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Enter name..."
          value={form.fullname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phonenumber"
          placeholder="Enter phone number..."
          value={form.phonenumber}
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
