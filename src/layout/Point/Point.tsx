import React from "react";

import PointService from "../../services/PointService";
import { Button } from "../../components";

const Point: React.FC = () => {
  const makePoint = () => PointService.get();
  
  return (
    <>
      <Button type="accent" label="bater o ponto" onClick={makePoint} />
    </>
  ); 
}

export default Point;
