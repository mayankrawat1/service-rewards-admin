import { MdEdit, MdDelete } from "react-icons/md";
import Table from "react-bootstrap/Table";
import styles from "./RewardBadge.module.css";

const RewardBadge = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "15px",
        }}
      >
        <h5>Reward-Badges</h5>
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

export default RewardBadge;
