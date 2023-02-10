import Form from "../Form";
import Intro from "../Intro";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2">
      <Intro />
      <Form />
    </div>
  );
}
