import React from "react";
import Lottie from "react-lottie";
import * as loading from "../loading-green.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return <Lottie options={defaultOptions} height={120} width={120} />
};

export default Loading;
