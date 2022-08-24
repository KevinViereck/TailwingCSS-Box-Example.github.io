import "./App.css";

function App() {
  // bg -> background color

  // hover:... applies class when hovering

  // ..-blue/green/red/etc-100/1000

  // text-... text color

  // font-bold/semibold

  // py-# -> padding in the y-axis

  // px-# -> padding in the x-axis

  const cars = [
    {
      manufacturer: "BMW",
      model: "X5",
      year: "2014",
    },
    {
      manufacturer: "Lamborghini",
      model: "Aventador",
      year: "2022",
    },

    {
      manufacturer: "Mercedes",
      model: "EQS",
      year: "2019",
    },
    
    //more cars
  ];

  return (
    <div class="shadow-2xl rounded-lg m-4 w-80 h-60 bg-gradient-to-br
    from-blue-400 via-purple-500 
    to-pink-500">
      
      <table>
        <div class="button">
          <tr>
            <th>
              <button class="blue-button">Blue Button</button>
            </th>

            <th>
              <button class="red-button">Red Button</button>
            </th>

            <th>
              <button class="green-button">Green Button</button>
            </th>
          </tr>
        </div>
      </table>

      <table class="table-main">
        <thead class="header font-mono p-4">
          <tr>
            <th>Manufacturer:</th>
            <th>Model:</th>
            <th>Year:</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr class="tr-body">
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
