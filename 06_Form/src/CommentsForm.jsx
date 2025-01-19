import { useState } from "react";
import { useFormik } from 'formik';



const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username Can not Empty!!!';
    } 
    if (!values.comment) {
        errors.comment = 'Please Enter SomeComment!!!';
      } 
    return errors;
  }
export default function CommentsForm({addNewComment}) {
//   let [formData, setFormData] = useState({
//     username: "",
//     comment: "",
//     rating: 5,
//   });



const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
      rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

//   let handleInputChange = (event) => {
//     setFormData((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };
//    let handleSubmit = (event) =>{
//     event.preventDefault();
//     addNewComment(formData);
//     setFormData({
//         username: "",
//         comment: "",
//         rating: 5,
//     })
//    }

  return (
    <div>
      <h3>Give a Comment !!!</h3>
      <form action="#" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
        //   value={formData.username}
        onChange={formik.handleChange}
        value={formik.values.username}
          id="username"
          placeholder="Username"
        //   onChange={handleInputChange}
        />
        {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
        <br />
        <br />
        <label htmlFor="commetn">Comment : </label>
        <textarea
          name="comment"
          id="comment"
        //   value={formData.comment}
        value={formik.values.comment}
          placeholder="Give a Comment!"
        //   onChange={handleInputChange}
        onChange={formik.handleChange}
        ></textarea>
        {formik.errors.comment ? <div style={{color:"red"}}>{formik.errors.comment}</div> : null}
        <br />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
        //   value={formData.rating}
        value={formik.values.rating}
          min={1}
          max={5}
          placeholder="Rating"
          name="rating"
          id="rating"
        //   onChange={handleInputChange}
        onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
