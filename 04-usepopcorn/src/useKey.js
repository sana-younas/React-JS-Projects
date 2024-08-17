import { useEffect } from "react";

export function useKey(onCloseMovie) {
  useEffect(function () {
    function callback(e) {
      if (e.code === "Escape") {
        onCloseMovie();
        console.log("Closing");
      }
    }
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  });
}
