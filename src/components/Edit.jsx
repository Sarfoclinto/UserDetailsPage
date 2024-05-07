import { useParams } from "react-router-dom";
const Edit = (props) => {
  const id = props.id;
  return (
    <a href={"/editpage" + "/" + id}>
      <img src="src/assets/edit.png" alt="" />
    </a>
  );
};

export default Edit;
