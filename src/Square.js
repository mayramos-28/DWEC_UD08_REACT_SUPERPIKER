export function Square(props) {
  const { hue, saturation, ligthnessPercent } = props;

  let syleBackground = {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${parseInt(
      ligthnessPercent * 100
    )}%)`,
  };
  return <div style={syleBackground} className="square"></div>;
}
