import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <ReactLoading type={"bars"} color='#000000' />
    </div>
  );
};

export default Loading;
