import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDarkMode from "../hooks/useDarkMode";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";

export default function SwitchDarkMode() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return {
    darkMode,
    handleToggleDarkMode,
  };
}
