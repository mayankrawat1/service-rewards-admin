import { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import styles from "./RewardBadge.module.css";
import RewardBadgeModal from "../Dashboard/RewardBadgeModal";
import axios from "axios";

const RewardBadge = () => {
  const [newRewardBadgeCreated, setNewRewardBadgeCreated] = useState(false);
  const [allBadgeRecord, setAllBadgeRecord] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "http://localhost:5000/service-reward/all-reward-badge"
      );
      console.log(result.data);
      setAllBadgeRecord(result.data);
    };
    getData();
  }, [newRewardBadgeCreated]);

  return (
    <>
      <RewardBadgeModal
        show={show}
        handleClose={handleClose}
        fetchRewardBadge={(e) => setNewRewardBadgeCreated(e)}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <h5>Reward-Badges</h5>

          <button
            className={styles.addRewardBadgeDataButton}
            onClick={() => setShow(true)}
          >
            Add
          </button>
        </div>
        <div>
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
              {allBadgeRecord.map((record) => {
                return (
                  <tr key={record.badgeNo}>
                    <td>{record.badgeNo}</td>
                    <td>{record.badgeName}</td>
                    <td>{record.badgePoint}</td>
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

export default RewardBadge;
