"use client";
import React from "react";

interface Data {
  name: string;
  type: string;
}

interface ItemColumnProps {
  title: string;
  items: Data[];
  onItemClick: (item: Data) => void;
}

export function ItemColumn({ title, items, onItemClick }: ItemColumnProps) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <h2 className="font-semibold text-center mb-2">{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => onItemClick(item)}
            className="border rounded p-2 text-left hover:bg-gray-100"
          >
            {item.name}
          </button>
        ))}
        {items.length === 0 && (
          <p className="text-center text-sm text-gray-500">No items</p>
        )}
      </div>
    </div>
  );
}

export default ItemColumn;
