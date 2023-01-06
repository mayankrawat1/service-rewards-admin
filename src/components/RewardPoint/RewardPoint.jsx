import { MdEdit, MdDelete } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import Table from "react-bootstrap/Table";
import styles from "./RewardPoint.module.css";
import RewardPointModal from "../Dashboard/RewardPointModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import port from "../../config";

const RewardPoint = () => {
  const [newRewardPointCreated, setNewRewardPointCreated] = useState(false);
  const [allRecord, setAllRecord] = useState([]);
  const [show, setShow] = useState(false);
  const [updatePoint, setUpdatePoint] = useState({});

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`${port}/service-reward/all-reward-point`);
      setAllRecord(result.data);
    };
    getData();
  }, [newRewardPointCreated]);

  const handleDeletePointData = async (id) => {
    try {
      const { data } = await axios.delete(
        `${port}/service-reward/delete-reward-point/${id}`
      );
      data._id && setAllRecord(allRecord.filter(({ _id }) => _id !== data._id));
      toast.success("Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdatePointData = async (data) => {
    try {
      setShow(true);
      setUpdatePoint(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <RewardPointModal
        show={show}
        handleClose={handleClose}
        fetchRewardPoint={(e) => setNewRewardPointCreated(e)}
        updatePoint={updatePoint}
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
            <BiPlusMedical />
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
                          onClick={() => handleUpdatePointData(record)}
                        >
                          <MdEdit />
                        </button>

                        <button
                          className={styles.delete}
                          onClick={() => handleDeletePointData(record._id)}
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
