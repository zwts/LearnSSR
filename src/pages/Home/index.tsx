import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (<
    div>
      <h1>Home title</h1>
      <button
        onClick={(): void => {alert('This home page')}}
      >
        Alert
      </button>
      <a href="http://127.0.0.1:3000/demo">link to demo</a>
      <span
        onClick={(): void => {navigate('demo')}}
      >
        router to demo
      </span>
    </div>
  );
};

export default Home;
