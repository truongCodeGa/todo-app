export default function useSliceString() {
  function newSlice(string) {
    if (string.length < 20) {
      return string;
    } else {
      return string.slice(0, 20) + "...";
    }
  }
  return { newSlice };
}
