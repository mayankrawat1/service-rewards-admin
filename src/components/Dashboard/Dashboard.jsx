import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [rewardPointData, setRewardPointData] = useState({
    eventName: "",
    eventPoint: "",
  });

  const handlePointData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRewardPointData({ ...rewardPointData, [name]: value });
  };

  const handlePointDataSubmit = async (e) => {
    e.preventDefault();
    const reault = await axios.post(
      "http://localhost:5000/service-reward/create-reward-point",
      { ...rewardPointData }
    );
    console.log(reault);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <h5>Add Reward Point Data</h5>
        </div>
        <div style={{ margin: "10px" }}>
          <Form onSubmit={handlePointDataSubmit}>
            <div className={styles.form}>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Event Name"
                  name="eventName"
                  value={rewardPointData.eventName}
                  onChange={handlePointData}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="number"
                  placeholder="Enter Event Point"
                  name="eventPoint"
                  value={rewardPointData.eventPoint}
                  onChange={handlePointData}
                />
              </Form.Group>

              <button type="submit" className={styles.formButton}>
                Add
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <h5>Add Reward Badge Data</h5>
        </div>
        <div style={{ margin: "10px" }}>
          <Form>
            <div className={styles.form}>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Badge Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Enter Bdge Point" />
              </Form.Group>

              <button type="submit" className={styles.formButton}>
                Add
              </button>
            </div>
          </Form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <h5>Reward-Badges</h5>
        </div>
        <Table bordered hover responsive>
          <thead>
            <tr className={styles.head}>
              <th>Badge Number</th>
              <th>Badge Name</th>
              <th>Badge Point</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            <tr>
              <td>1</td>
              <td>vip-record</td>
              <td>50</td>
              <td>
                <div className={styles.actions}>
                  <button
                    className={styles.edit}
                    //   onClick={() => handleEdit(info)}
                  >
                    <MdEdit />
                  </button>

                  <button
                    className={styles.delete}
                    //   onClick={() => handleDelete(info._id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
