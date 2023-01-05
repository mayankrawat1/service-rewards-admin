import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useEffect } from "react";

function RewardPointModal({
  show,
  handleClose,
  fetchRewardPoint,
  updatePoint,
}) {
  const [rewardPointData, setRewardPointData] = useState({
    eventName: "",
    eventPoint: 0,
  });

  useEffect(() => {
    if (updatePoint) {
      setRewardPointData({
        eventName: updatePoint.eventName,
        eventPoint: updatePoint.eventPoint,
      });
    }
  }, [updatePoint]);

  const handlePointData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRewardPointData({ ...rewardPointData, [name]: value });
  };

  const handlePointDataSubmit = async (e) => {
    try {
      e.preventDefault();
      if (updatePoint._id) {
        const result = await axios.put(
          `http://localhost:5000/service-reward/update-reward-point/${updatePoint._id}`,
          { ...rewardPointData }
        );
        fetchRewardPoint(true);
        toast.success("Updated successfully");
        console.log(result);
      } else {
        const result = await axios.post(
          "http://localhost:5000/service-reward/create-reward-point",
          { ...rewardPointData }
        );
        fetchRewardPoint(true);
        toast.success("Added successfully");
        console.log(result);

        rewardPointData.eventName = "";
        rewardPointData.eventPoint = 0;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reward-Point</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePointDataSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Name"
                name="eventName"
                value={rewardPointData.eventName}
                onChange={handlePointData}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Point</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Event Point"
                name="eventPoint"
                value={rewardPointData.eventPoint}
                onChange={handlePointData}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleClose}
              style={{
                backgroundColor: "#008542",
                border: "none",
                outline: "none",
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RewardPointModal;
