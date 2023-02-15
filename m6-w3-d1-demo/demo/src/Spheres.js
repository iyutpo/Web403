import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTexture2d } from "@react-vertex/core";
import { usePhongTextured } from "@react-vertex/material-hooks";
import { useSphereElements } from "@react-vertex/geometry-hooks";
import tiles from "./abstract.jpg";

function Spheres({ layoutRadius, sphereCount, sphereRadius }) {
  const [texture] = useTexture2d(tiles);
  const program = usePhongTextured(texture, 0.1);
  const sphere = useSphereElements(sphereRadius, 20, 20);

  const positions = useMemo(() => {
    const result = [];

    for (let i = 0; i < sphereCount; i++) {
      const a = Math.acos(-1 + (2 * i) / sphereCount);
      const b = Math.sqrt((sphereCount - 1) * Math.PI) * a;

      result.push([
        layoutRadius * Math.cos(b) * Math.sin(a),
        layoutRadius * Math.sin(b) * Math.sin(a),
        layoutRadius * Math.cos(a)
      ]);
    }

    return result;
  }, [sphereCount, layoutRadius]);

  return (
    <material program={program}>
      {positions.map((position, idx) => (
        <geometry key={idx} position={position} {...sphere} />
      ))}
    </material>
  );
}

Spheres.propTypes = {
  sphereCount: PropTypes.number.isRequired,
  sphereRadius: PropTypes.number.isRequired,
  layoutRadius: PropTypes.number.isRequired
};

export default Spheres;
