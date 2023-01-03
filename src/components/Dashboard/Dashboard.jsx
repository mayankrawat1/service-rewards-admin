import Table from "react-bootstrap/Table";
import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
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
          <h4>Reward-Points</h4>
        </div>
        <Table bordered hover responsive>
          <thead>
            <tr className={styles.head}>
              <th>Event No</th>
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <h4>Reward-Badges</h4>
        </div>
        <Table bordered hover responsive>
          <thead>
            <tr className={styles.head}>
              <th>Badge No</th>
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
