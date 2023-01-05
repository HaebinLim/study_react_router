import { useSearchParams } from 'react-router-dom';
export default function About() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  return (
    <div>
      <h1>About</h1>
      {name && <div>{name}</div>}
    </div>
  );
}
/*
export default function About(props) {
  const searchParams = props.location.search;
  const obj = new URLSearchParams(searchParams);
  console.log(obj.get('name'));
}
*/