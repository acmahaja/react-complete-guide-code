import styles from "./ErrorModal.module.css";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>
            {props.errorMessage.title.trim().length > 0
              ? props.errorMessage.title
              : "An Error occurred!"}
              {props.errorMessage.title}
          </h2>
        </div>
        <div className={styles.content}>
          <p>
            {props.errorMessage.message.trim().length > 0
              ? props.errorMessage.message
              : "Something went wrong!"}
          </p>
        </div>
        <div className={styles.actions}>
          <Button onClick={props.onConfirm} type={"submit"}>
            Okay
          </Button >

        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
