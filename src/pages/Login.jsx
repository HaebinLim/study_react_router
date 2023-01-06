import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  function login() {
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>로그인하기</button>
    </div>
  );
}
/*
export default function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000)
  }
*/