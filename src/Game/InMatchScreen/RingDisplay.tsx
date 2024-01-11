import React from 'react';
import styled from 'styled-components';

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

export const RingDisplay: React.FC = () => {
  return (
    <RingGrid>
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

      <RingGridMat $column="west-mat" $row="north-mat" />
      <RingGridMat $column="west-mat" $row="middle-mat" />
      <RingGridMat $column="west-mat" $row="south-mat" />

      <RingGridMat $column="middle-mat" $row="north-mat" />
      <RingGridMat $column="middle-mat" $row="middle-mat" />
      <RingGridMat $column="middle-mat" $row="south-mat" />

      <RingGridMat $column="east-mat" $row="north-mat" />
      <RingGridMat $column="east-mat" $row="middle-mat" />
      <RingGridMat $column="east-mat" $row="south-mat" />
    </RingGrid>
  );
};
