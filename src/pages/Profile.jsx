import { useParams } from 'react-router-dom';
export default function Profile() {
  const { id } = useParams();
  return (
    <div>
      <h1>pofile</h1>
      {id && <div>{id}</div>}
    </div>
  );
}
/*
export default function Profile(props) {
  const id = props.match.params.id;
}
*/