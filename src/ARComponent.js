// ARComponent.js
import React from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const ARComponent = () => {
  return (
    <Scene arjs>
      {"ashish"}
      <Entity
        geometry={{ primitive: 'box' }}
        material={{ color: 'red' }}
        position={{ x: 0, y: 0, z: -1 }}
      />

      {/* <Entity
        geometry={{ primitive: 'sphere' }}
        material={{ color: 'blue' }}
        position={{ x: 0.5, y: 0, z: -1.5 }}
      /> */}
    </Scene>
  );
};

export default ARComponent;
