/* custom hook 
Decide input and output
here we do not need any input 
output will be boolean obline status */

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //check online status

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
