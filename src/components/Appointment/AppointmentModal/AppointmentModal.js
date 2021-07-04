import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


const AppointmentModal = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/appointmentData', {
      method: 'POST',
      headers:{ 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('appointment successfully')
      }
    })

   // console.log(data)
  };






  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <input {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group">
            <input {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group">
            <input {...register("email", { required: true })} name="email" placeholder="Your Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group row">
            <div className="col-4">

              <select className="form-control" name="gender" {...register("gender", { required: true })} >
                <option disabled={true} value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}

            </div>
            <div className="col-4">
              <input {...register("age", { required: true })} name="age" placeholder="Your Age" className="form-control" />
              {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
              <input {...register("weight", { required: true })} name="weight" placeholder="Your Weight" className="form-control" />
              {errors.weight && <span className="text-danger">This field is required</span>}
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn btn-brand">Send</button>
          </div>



        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;