import "./Dice.css"

const Dice = ({number}) => {

  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  let points = [];
  switch (number) {
    case 1:
      points = [4]
      break;
    case 2:
      points = [0, 8]
      break;
    case 3:
      points = [0, 4, 8]
      break;
    case 4:
      points = [0, 2, 6, 8]
      break;
    case 5:
      points = [0, 2, 4, 6, 8]
      break;
    case 6:
      points = [0, 2, 3, 5, 6, 8]
      break;
  }

  return (
    <div className={"dice"}>
      {array.map((item, index) => (
        <div key={index} className={"field " + (points.includes(item) ? "dot" : "")}></div>
      ))}
    </div>
  )
}

export default Dice