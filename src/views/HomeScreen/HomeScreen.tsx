import ChessBoard from '../../components/ChessBoard/ChessBoard';
import Menu from '../../components/Menu/Menu';

import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  return (
    <div className={styles.wrapper}>
      <ChessBoard />
      <Menu />
    </div>
  );
};

export default HomeScreen;
