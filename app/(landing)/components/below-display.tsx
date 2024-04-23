"use client";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const BelowDisplay = () => {
  const { height } = useWindowDimensions();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="block relative">
      <div className="grid grid-cols-2 w-full">
        <p className="w-1/2">hi</p>
        <p className="w-1/2">there</p>
      </div>
    </div>
  );
};

export default BelowDisplay;
