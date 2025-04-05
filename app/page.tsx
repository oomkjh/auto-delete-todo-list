"use client";
import React from "react";
import data from "./data.json";

interface Data {
  name: string;
  type: string;
}

export default function Home() {
  const [fruits, setFruits] = React.useState<Data[]>([]);
  const [vegetables, setVegetables] = React.useState<Data[]>([]);
  const [list, setList] = React.useState<Data[]>(data);

  const handleClickList = (item: Data) => {
    if (item.type === "Fruit") {
      setFruits((prevFruits) => [...prevFruits, item]);
    } else if (item.type === "Vegetable") {
      setVegetables((prevVegetables) => [...prevVegetables, item]);
    }

    setList((prevList) =>
      prevList.filter((listItem) => listItem.name !== item.name)
    );

    setTimeout(() => {
      if (item.type === "Fruit") {
        setFruits((prev) => prev.filter((i) => i.name !== item.name));
      } else if (item.type === "Vegetable") {
        setVegetables((prev) => prev.filter((i) => i.name !== item.name));
      }

      setList((prev) => [...prev, item]);
    }, 5000);
  };

  const handleClickFruit = (item: Data) => {
    setFruits((prevFruits) =>
      prevFruits.filter((fruit) => fruit.name !== item.name)
    );

    setList((prevList) => [...prevList, item]);
  };

  const handleClickVegetable = (item: Data) => {
    setVegetables((prevVegetables) =>
      prevVegetables.filter((vegetable) => vegetable.name !== item.name)
    );

    setList((prevList) => [...prevList, item]);
  };

  return (
    <div className="flex flex-row p-40 h-screen gap-5">
      {/* List */}
      <div className="gap-3 flex flex-col">
        {list.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => handleClickList(item)}
              className="border-2 border-gray-200 w-50 p-2 text-center cursor-pointer hover:bg-gray-100"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      {/* Fruit */}
      <div className="w-50 border-2 border-gray-200">
        <div>
          <div className="border-b-2 border-gray-200 text-center p-1 font-bold">
            Fruit
          </div>
          <div className="gap-2 flex flex-col p-2">
            {fruits.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClickFruit(item)}
                className="border-2 border-gray-200 w-auto p-2 text-center cursor-pointer hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vegetable */}
      <div className="w-50 border-2 border-gray-200">
        <div>
          <div className="border-b-2 border-gray-200 text-center p-1 font-bold">
            Vegetable
          </div>
          <div className="gap-2 flex flex-col p-2">
            {vegetables.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClickVegetable(item)}
                className="border-2 border-gray-200 w-auto p-2 text-center cursor-pointer hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
