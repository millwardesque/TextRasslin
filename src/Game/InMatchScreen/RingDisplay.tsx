import React from 'react';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

import {
  RingPosition,
  RingPositionX,
  RingPositionY,
  RingPositionZ,
} from '../types';
import { useInMatchContext } from './InMatchContext';

const OFFSET_DISTANCE = 2; // Distance multiplied by the offset, in px;

const GridGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ display: 'contents' }}>{children}</div>;
};

const RingGrid = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: [west-floor] 1fr [west-apron] 0.5fr [west-mat] 1fr [middle-mat] 1fr [east-mat] 1fr [east-apron] 0.5fr [east-floor] 1fr;
  grid-template-rows: [north-floor] 1fr [north-apron] 0.5fr [north-mat] 1fr [middle-mat] 1fr [south-mat] 1fr [south-apron] 0.5fr [south-floor] 1fr;
`;

const RingGridCell = styled.div<{ $column: string; $row: string }>`
  display: flex;
  grid-column: ${({ $column }) => $column} / span 1;
  grid-row: ${({ $row }) => $row} / span 1;
`;

const RingGridApron = styled(RingGridCell)<{ $column: string; $row: string }>`
  background-color: #08d;
  border: 1px dashed #00f;
`;

const RingGridFloor = styled(RingGridCell)<{ $column: string; $row: string }>`
  background-color: #000;
  border: 1px dashed #00f;
`;

const RingGridMat = styled(RingGridCell)<{ $column: string; $row: string }>`
  background-color: #0af;
  border: 1px dashed #00f;
`;

const WrestlerDisplay = styled.div<{ $color: string; $offset: number }>`
  position: relative;
  top: ${({ $offset }) => $offset * OFFSET_DISTANCE}px;
  left: ${({ $offset }) => $offset * OFFSET_DISTANCE}px;
  width: 8px;
  height: 8px;
  background-color: ${({ $color }) => $color};
`;

export const RingDisplay: React.FC = () => {
  const { wrestler1, wrestler2 } = useInMatchContext(
    useShallow(({ wrestler1, wrestler2 }) => ({
      wrestler1,
      wrestler2,
    }))
  );

  const wrestler1Cell = ringPositionToGridCell(wrestler1.position);
  const wrestler2Cell = ringPositionToGridCell(wrestler2.position);

  return (
    <RingGrid>
      <RingGridFloorCells />
      <RingGridApronCells />
      <RingGridMatCells />

      <RingGridCell
        $column={wrestler1Cell.column}
        $row={wrestler1Cell.row}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <WrestlerDisplay $color="#f00" $offset={1} />
      </RingGridCell>
      <RingGridCell
        $column={wrestler2Cell.column}
        $row={wrestler2Cell.row}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <WrestlerDisplay $color="#0f0" $offset={-1} />
      </RingGridCell>
      <RingGridCell $column={wrestler2Cell.column} $row={wrestler2Cell.row} />
    </RingGrid>
  );
};

export const RingGridApronCells: React.FC = () => {
  return (
    <GridGroup>
      <RingGridApron $column="west-apron" $row="north-apron" />
      <RingGridApron $column="west-apron" $row="north-mat" />
      <RingGridApron $column="west-apron" $row="middle-mat" />
      <RingGridApron $column="west-apron" $row="south-mat" />
      <RingGridApron $column="west-apron" $row="south-apron" />

      <RingGridApron $column="east-apron" $row="north-apron" />
      <RingGridApron $column="east-apron" $row="north-mat" />
      <RingGridApron $column="east-apron" $row="middle-mat" />
      <RingGridApron $column="east-apron" $row="south-mat" />
      <RingGridApron $column="east-apron" $row="south-apron" />

      <RingGridApron $column="west-mat" $row="north-apron" />
      <RingGridApron $column="middle-mat" $row="north-apron" />
      <RingGridApron $column="east-mat" $row="north-apron" />

      <RingGridApron $column="west-mat" $row="south-apron" />
      <RingGridApron $column="middle-mat" $row="south-apron" />
      <RingGridApron $column="east-mat" $row="south-apron" />
    </GridGroup>
  );
};

export const RingGridFloorCells: React.FC = () => {
  return (
    <GridGroup>
      <RingGridFloor $column="west-floor" $row="north-floor" />
      <RingGridFloor $column="west-floor" $row="north-apron" />
      <RingGridFloor $column="west-floor" $row="north-mat" />
      <RingGridFloor $column="west-floor" $row="middle-mat" />
      <RingGridFloor $column="west-floor" $row="south-mat" />
      <RingGridFloor $column="west-floor" $row="south-apron" />
      <RingGridFloor $column="west-floor" $row="south-floor" />

      <RingGridFloor $column="east-floor" $row="north-floor" />
      <RingGridFloor $column="east-floor" $row="north-apron" />
      <RingGridFloor $column="east-floor" $row="north-mat" />
      <RingGridFloor $column="east-floor" $row="middle-mat" />
      <RingGridFloor $column="east-floor" $row="south-mat" />
      <RingGridFloor $column="east-floor" $row="south-apron" />
      <RingGridFloor $column="east-floor" $row="south-floor" />

      <RingGridFloor $column="west-apron" $row="north-floor" />
      <RingGridFloor $column="west-mat" $row="north-floor" />
      <RingGridFloor $column="middle-mat" $row="north-floor" />
      <RingGridFloor $column="east-mat" $row="north-floor" />
      <RingGridFloor $column="east-apron" $row="north-floor" />

      <RingGridFloor $column="west-apron" $row="south-floor" />
      <RingGridFloor $column="west-mat" $row="south-floor" />
      <RingGridFloor $column="middle-mat" $row="south-floor" />
      <RingGridFloor $column="east-mat" $row="south-floor" />
      <RingGridFloor $column="east-apron" $row="south-floor" />
    </GridGroup>
  );
};

export const RingGridMatCells: React.FC = () => {
  const matPositionName = RingPositionZ[RingPositionZ.mat];

  const xPositions = Object.values(RingPositionX)
    .filter((position) => isNaN(Number(position)))
    .map((xPosition) => `${xPosition}-${matPositionName}`);

  const yPositions = Object.values(RingPositionY)
    .filter((position) => isNaN(Number(position)))
    .map((yPosition) => `${yPosition}-${matPositionName}`);

  return (
    <GridGroup>
      {xPositions.flatMap((xPosition) =>
        yPositions.map((yPosition) => (
          <RingGridMat $column={xPosition} $row={yPosition} />
        ))
      )}
    </GridGroup>
  );
};

function ringPositionToGridCell(position: RingPosition): {
  column: string;
  row: string;
} {
  const xPositionName = RingPositionX[position.x];
  const yPositionName = RingPositionY[position.y];
  const zPositionName = RingPositionZ[position.z];

  return {
    column: `${xPositionName}-${zPositionName}`,
    row: `${yPositionName}-${zPositionName}`,
  };
}
