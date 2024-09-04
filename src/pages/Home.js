import Button from '../component/Button.js';
import Editor from '../component/Editor.js';
import Header from '../component/Header.js';

const Home = () => {
  return (
    <div>
      <Header
        title={'2024년 n월'}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
    </div>
  );
};

export default Home;
