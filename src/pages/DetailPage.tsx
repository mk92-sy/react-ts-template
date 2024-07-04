import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  return (
    //html(JSX)는 이곳에
    <div>페이지 id: {id}</div>
  );
}
