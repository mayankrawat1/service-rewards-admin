import { MdEdit, MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import styles from "./RewardPoint.module.css";
import RewardPointModal from "../Dashboard/RewardPointModal";
import { useState } from "react";

const RewardPoint = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <RewardPointModal show={show} handleClose={handleClose} />
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
    </>
  );
};

export default RewardPoint;
