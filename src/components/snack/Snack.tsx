import styles from './Snack.module.scss';

type SnackType = {
  isShowSnack: boolean;
  isRequestFalled: boolean;
};

enum SnackMessages {
  ERROR = 'Ошибка аунтефикации',
  GOOD = 'Вы авторизованы',
}

export const Snack = ({ isShowSnack, isRequestFalled }: SnackType) => {
  return (
    <div className={styles.snackContainer}>
      <div
        className={`${styles.snack} ${isShowSnack && styles.snackShow} ${!isRequestFalled && styles.snackError}`}
      >
        {!isRequestFalled ? SnackMessages.ERROR : SnackMessages.GOOD}
      </div>
    </div>
  );
};
