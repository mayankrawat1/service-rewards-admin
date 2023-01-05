import { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import Table from "react-bootstrap/Table";
import styles from "./RewardBadge.module.css";
import RewardBadgeModal from "../Dashboard/RewardBadgeModal";
import axios from "axios";
import { toast } from "react-toastify";
import port from "../../config";

const RewardBadge = () => {
  const [newRewardBadgeCreated, setNewRewardBadgeCreated] = useState(false);
  const [allBadgeRecord, setAllBadgeRecord] = useState([]);
  const [show, setShow] = useState(false);
  const [updateBadge, setUpdateBadge] = useState({});

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`${port}/service-reward/all-reward-badge`);
      console.log(result.data);
      setAllBadgeRecord(result.data);
    };
    getData();
  }, [newRewardBadgeCreated]);

  const handleDeleteBadgeData = async (id) => {
    try {
      const { data } = await axios.delete(
        `${port}/service-reward/delete-reward-badge/${id}`
      );
      data._id &&
        setAllBadgeRecord(allBadgeRecord.filter(({ _id }) => _id !== data._id));
      toast.success("Deleted Successfully");
      console.log("delete");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateBadgeData = async (data) => {
    try {
      setShow(true);
      setUpdateBadge(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <RewardBadgeModal
        show={show}
        handleClose={handleClose}
        fetchRewardBadge={(e) => setNewRewardBadgeCreated(e)}
        updateBadge={updateBadge}
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
            <BiPlusMedical />
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
                          onClick={() => handleUpdateBadgeData(record)}
                        >
                          <MdEdit />
                        </button>

                        <button
                          className={styles.delete}
                          onClick={() => handleDeleteBadgeData(record._id)}
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
