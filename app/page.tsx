import data from "./data.json";

export default function Home() {
  console.log("test", data);

  return (
    <div className="flex flex-row p-40 gap-2">
      <div className="gap-2 flex flex-col">
        {data.map((item) => (
          <div key={item.name}>
            <div className="border border-2 border-gray-500 w-50 p-2 text-center cursor-pointer hover:bg-gray-100">
              {item.name}
            </div>
            {/* <div>{item.type}</div> */}
          </div>
        ))}
      </div>
      <div className="bg-green-500">
        <div>
          <div className="border-red-100">Fruit</div>
        </div>
      </div>
      <div className="bg-red-500">
        <div>Vegetable</div>
      </div>
    </div>
  );
}
