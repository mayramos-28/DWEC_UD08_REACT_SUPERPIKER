import { Square } from "./Square";

function Gradient(props) {
  const { hue, saturation, number } = props;

  return (
    <div className="squares">
      {Array.from({ length: number }, (_, i) => (
        <Square
          key={`square${i}`}
          hue={hue}
          saturation={saturation}
          ligthnessPercent={i / number}
        />
      ))}
    </div>
  );
}

export default Gradient;
