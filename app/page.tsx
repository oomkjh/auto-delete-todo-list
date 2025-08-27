"use client";
import React from "react";
import data from "./data.json";
import ItemColumn from "./components/ItemColumn";

interface Data {
  name: string;
  type: string;
}

type Categories = Record<string, Data[]>;

export default function Home() {
  const [list, setList] = React.useState<Data[]>(data);
  const [categories, setCategories] = React.useState<Categories>({
    Fruit: [],
    Vegetable: [],
  });

  const moveToCategory = (item: Data) => {
    setList((prev) => prev.filter((i) => i.name !== item.name));
    setCategories((prev) => ({
      ...prev,
      [item.type]: [...prev[item.type], item],
    }));

    setTimeout(() => {
      setCategories((prev) => {
        const exists = prev[item.type].some((i) => i.name === item.name);
        if (!exists) return prev;
        setList((listPrev) => [...listPrev, item]);
        return {
          ...prev,
          [item.type]: prev[item.type].filter((i) => i.name !== item.name),
        };
      });
    }, 5000);
  };

  const moveToList = (category: string, item: Data) => {
    setCategories((prev) => ({
      ...prev,
      [category]: prev[category].filter((i) => i.name !== item.name),
    }));
    setList((prev) => [...prev, item]);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Auto Delete Todo List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ItemColumn title="Items" items={list} onItemClick={moveToCategory} />
        <ItemColumn
          title="Fruit"
          items={categories.Fruit}
          onItemClick={(item) => moveToList("Fruit", item)}
        />
        <ItemColumn
          title="Vegetable"
          items={categories.Vegetable}
          onItemClick={(item) => moveToList("Vegetable", item)}
        />
      </div>
    </div>
  );
}
