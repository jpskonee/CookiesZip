import React, { useState } from "react";
import SplashModalAttr from "./SplashModalAttr";

function AttributePage() {
  const [openSplash, setOpenSplash] = useState(true);

  const handleSplashOpen = () => {
    setOpenSplash(true);
  };

  const handleSplashClose = () => {
    setOpenSplash(false);
  };
  return (
    <div>
      {openSplash && (
        <SplashModalAttr
          openSplash={openSplash}
          setOpenSplash={setOpenSplash}
          handleSplashOpen={handleSplashOpen}
        />
      )}
    </div>
  );
}

export default AttributePage;
