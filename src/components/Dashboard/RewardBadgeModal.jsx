import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import port from "../../config";

function RewardBadgeModal({
  show,
  handleClose,
  updateBadge,
  fetchRewardBadge,
}) {
  const [rewardBadgeData, setRewardBadgeData] = useState({
    badgeNo: 0,
    badgeName: "",
    badgePoint: 0,
  });

  useEffect(() => {
    if (updateBadge) {
      setRewardBadgeData({
        badgeNo: updateBadge.badgeNo,
        badgeName: updateBadge.badgeName,
        badgePoint: updateBadge.badgePoint,
      });
    }
  }, [updateBadge]);

  const handleBadgeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRewardBadgeData({ ...rewardBadgeData, [name]: value });
  };

  const handleBadgeDataSubmit = async (e) => {
    try {
      e.preventDefault();
      if (updateBadge._id) {
        const result = await axios.put(
          `${port}/service-reward/update-reward-badge/${updateBadge._id}`,
          { ...rewardBadgeData }
        );
        fetchRewardBadge(true);
        toast.success("Added successfully");
      } else {
        const result = await axios.post(
          `${port}/service-reward/create-reward-badge`,
          { ...rewardBadgeData }
        );
        fetchRewardBadge(true);
        toast.success("Added successfully");

        rewardBadgeData.badgeNo = 0;
        rewardBadgeData.badgeName = "";
        rewardBadgeData.badgePoint = 0;
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
          <Modal.Title>Reward-Badge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBadgeDataSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Badge Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Badge Number"
                name="badgeNo"
                value={rewardBadgeData.badgeNo}
                onChange={handleBadgeData}
                required={true}
                disabled={updateBadge._id ? true : false}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Badge Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Badge Name"
                name="badgeName"
                value={rewardBadgeData.badgeName}
                onChange={handleBadgeData}
                required={true}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Badge Point</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Badge Point"
                name="badgePoint"
                value={rewardBadgeData.badgePoint}
                onChange={handleBadgeData}
                required={true}
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default RewardBadgeModal;
