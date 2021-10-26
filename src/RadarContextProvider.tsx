import { createContext, useState, FC } from "react";

export type RadarContextType = {
  category: string;
  technology: string;
  mainMenu: string;
  setCategory: (newCategory: string) => void;
  setTechnology: (newTechnology: string) => void;
  setMainMenu: (newMainMenu: string) => void;
};

export const RadarContext = createContext<RadarContextType>({
  category: "",
  technology: "",
  mainMenu: "",
  setCategory: (name: string) => {},
  setTechnology: (name: string) => {},
  setMainMenu: (name: string) => {},
});

export const RadarContextProvider: FC = ({ children }) => {
  const [mainMenu, setMainMenu] = useState("tech stack");
  const [category, setCategory] = useState("Languages");
  const [technology, setTechnology] = useState("");
  const initialValue = {
    category,
    technology,
    mainMenu,
    setCategory,
    setTechnology,
    setMainMenu,
  };

  return (
    <RadarContext.Provider value={initialValue}>
      {children}
    </RadarContext.Provider>
  );
};
