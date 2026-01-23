import { useEffect, useState } from "react";

export const GitHub = () => {
  /*const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
*/

  return (
    <div>
      <h1>Github followers: {data.followers}</h1>
    </div>
  );
};

const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json;
};
