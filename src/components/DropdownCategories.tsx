"use client";

import { useCategories } from "@/hooks/useCategories";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface IDropdownProps {
  onChange: (value: string) => void;
  value?: string;
  error?: string;
}

export function DropdownCategories({ onChange, value, error }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value ?? "");
  const { categories } = useCategories();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const onCategoryClicked = (value: string) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
    onChange(value);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between h-10 px-2 rounded-md bg-zinc-800 outline-none border border-transparent focus:border-primary transition-colors"
      >
        {selectedOption.length === 0
          ? "Selecione uma categoria"
          : selectedOption}

        <ChevronDown />
      </button>

      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-500">
          <span className="text-xs">{error}</span>
        </div>
      )}

      {isDropdownOpen && (
        <div className="absolute top-11 w-full px-0.5 py-1 rounded-md bg-zinc-950 z-50">
          <ul className="text-base font-medium *:py-3 *:rounded-md *:cursor-pointer *:px-4">
            <li
              onClick={() => onCategoryClicked("")}
              className="hover:bg-zinc-900"
            >
              Selecione uma categoria
            </li>

            {categories.map((category, index) => (
              <li
                onClick={() => onCategoryClicked(category)}
                className="hover:bg-zinc-900"
                key={index}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
