import { useEffect } from "react";

export function useBackgroundColor(color?: string) {
  useEffect(() => {
    if (color) {
      document.documentElement.style.setProperty("--page-background", color);
    }
  }, [color]);
}
