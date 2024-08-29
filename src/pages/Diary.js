import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}번째 일기</div>
      <div>diary페이지</div>
    </div>
  );
};

export default Diary;
