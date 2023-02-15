import React from "react";
import PropTypes from "prop-types";
import { useBasicSolid } from "@react-vertex/material-hooks";
import { useSphereElements } from "@react-vertex/geometry-hooks";

function LightOrb({ color, radius, position }) {
  const basicProgram = useBasicSolid(color);
  const sphere = useSphereElements(radius, 30, 30);

  return (
    <material program={basicProgram}>
      <geometry position={position} {...sphere} />
    </material>
  );
}

LightOrb.propTypes = {
  color: PropTypes.object.isRequired,
  radius: PropTypes.number.isRequired,
  position: PropTypes.array.isRequired
};

export default LightOrb;
