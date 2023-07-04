import { useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const localUrl = "http://localhost:8600/hotels";
const deployedUrl = "https://booking-app-eqel.onrender.com/hotels";

export default function UploadPhoto({ toggle, setToggle}) {

  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [ error, setError] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", photo);

      await axios.post(localUrl + '/uploadPhotos')

      
    } catch (error) {
      console.log("Error occurred while submitting hotel photo:", error);
    }
  }

  const fileData = () => {
    if (photo)
      return (
        <h5>
          <em>{photo}</em>
        </h5>
      );
    return null;
  };

  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleShow}>
        Upload
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            

            <div className="form-group">
              <div className="custom-file">
                <input
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="custom-file-input"
                  id="image"
                />

                <label className="custom-file-label" htmlFor="image">
                  {photo ? fileData() : "Choose File"}
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            {error ? (
              <div className="text-danger">
                An error occurred uploading the file
              </div>
            ) : null}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
