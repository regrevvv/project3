import Editor from "../component/Editor.js";

const Home = () => {
  return (
    <div>
      <Editor
        onSubmit={() => {
          alert("작성완료클릭");
        }}
      />
    </div>
  );
};

export default Home;
