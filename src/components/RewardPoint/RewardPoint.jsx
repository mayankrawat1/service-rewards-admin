import { MdEdit, MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import styles from "./RewardPoint.module.css";
import RewardPointModal from "../Dashboard/RewardPointModal";
import { useState, useEffect } from "react";
import axios from "axios";

const RewardPoint = () => {
  const [newRewardPointCreated, setNewRewardPointCreated] = useState(false);
  const [allRecord, setAllRecord] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "http://localhost:5000/service-reward/all-reward-point"
      );
      console.log(result.data);
      setAllRecord(result.data);
    };
    getData();
  }, [newRewardPointCreated]);

  return (
    <>
      <RewardPointModal
        show={show}
        handleClose={handleClose}
        fetchRewardPoint={(e) => setNewRewardPointCreated(e)}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <h5>Reward-Points</h5>
          <button
            className={styles.addRewardPointDataButton}
            onClick={() => setShow(true)}
          >
            Add
          </button>
        </div>
        <div>
          <Table bordered hover responsive>
            <thead>
              <tr className={styles.head}>
                <th>Event Number</th>
                <th>Event Name</th>
                <th>Event Point</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.body}>
              {allRecord.map((record, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{record.eventName}</td>
                    <td>{record.eventPoint}</td>
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
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default RewardPoint;
