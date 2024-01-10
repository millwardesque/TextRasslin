import {
  RingPosition,
  RingPositionX,
  RingPositionY,
  RingPositionZ,
} from '../types';
import { getDirection, movePositionByDirection } from './utils';

const DEFAULT_POSITION: RingPosition = {
  x: RingPositionX.middle,
  y: RingPositionY.middle,
  z: RingPositionZ.mat,
};

describe('getDirection', () => {
  test.each([
    [RingPositionX.west, RingPositionX.west, 0],
    [RingPositionX.west, RingPositionX.middle, 1],
    [RingPositionX.west, RingPositionX.east, 1],
    [RingPositionX.middle, RingPositionX.west, -1],
    [RingPositionX.middle, RingPositionX.middle, 0],
    [RingPositionX.middle, RingPositionX.east, 1],
    [RingPositionX.east, RingPositionX.west, -1],
    [RingPositionX.east, RingPositionX.middle, -1],
    [RingPositionX.east, RingPositionX.east, 0],
  ])(
    'returns expected values along the X-axis (%d to %d = %d)',
    (fromPositionX, toPositionX, xDirection) => {
      const fromPosition: RingPosition = {
        ...DEFAULT_POSITION,
        x: fromPositionX,
      };

      const toPosition: RingPosition = {
        ...DEFAULT_POSITION,
        x: toPositionX,
      };

      expect(getDirection(fromPosition, toPosition)).toEqual({
        x: xDirection,
        y: 0,
        z: 0,
      });
    }
  );

  test.each([
    [RingPositionY.south, RingPositionY.south, 0],
    [RingPositionY.south, RingPositionY.middle, 1],
    [RingPositionY.south, RingPositionY.north, 1],
    [RingPositionY.middle, RingPositionY.south, -1],
    [RingPositionY.middle, RingPositionY.middle, 0],
    [RingPositionY.middle, RingPositionY.north, 1],
    [RingPositionY.north, RingPositionY.south, -1],
    [RingPositionY.north, RingPositionY.middle, -1],
    [RingPositionY.north, RingPositionY.north, 0],
  ])(
    'returns expected values along the Y-axis (%d to %d = %d)',
    (fromPositionY, toPositionY, yDirection) => {
      const fromPosition: RingPosition = {
        ...DEFAULT_POSITION,
        y: fromPositionY,
      };

      const toPosition: RingPosition = {
        ...DEFAULT_POSITION,
        y: toPositionY,
      };

      expect(getDirection(fromPosition, toPosition)).toEqual({
        x: 0,
        y: yDirection,
        z: 0,
      });
    }
  );

  test.each([
    [RingPositionZ.floor, RingPositionZ.floor, 0],
    [RingPositionZ.floor, RingPositionZ.apron, 1],
    [RingPositionZ.floor, RingPositionZ.mat, 1],
    [RingPositionZ.floor, RingPositionZ.corner, 1],
    [RingPositionZ.floor, RingPositionZ.secondTurnbuckle, 1],
    [RingPositionZ.floor, RingPositionZ.topTurnbuckle, 1],
    [RingPositionZ.apron, RingPositionZ.floor, -1],
    [RingPositionZ.apron, RingPositionZ.apron, 0],
    [RingPositionZ.apron, RingPositionZ.mat, 1],
    [RingPositionZ.apron, RingPositionZ.corner, 1],
    [RingPositionZ.apron, RingPositionZ.secondTurnbuckle, 1],
    [RingPositionZ.apron, RingPositionZ.topTurnbuckle, 1],
    [RingPositionZ.mat, RingPositionZ.floor, -1],
    [RingPositionZ.mat, RingPositionZ.apron, -1],
    [RingPositionZ.mat, RingPositionZ.mat, 0],
    [RingPositionZ.mat, RingPositionZ.corner, 1],
    [RingPositionZ.mat, RingPositionZ.secondTurnbuckle, 1],
    [RingPositionZ.mat, RingPositionZ.topTurnbuckle, 1],
    [RingPositionZ.corner, RingPositionZ.floor, -1],
    [RingPositionZ.corner, RingPositionZ.apron, -1],
    [RingPositionZ.corner, RingPositionZ.mat, -1],
    [RingPositionZ.corner, RingPositionZ.corner, 0],
    [RingPositionZ.corner, RingPositionZ.secondTurnbuckle, 1],
    [RingPositionZ.corner, RingPositionZ.topTurnbuckle, 1],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.floor, -1],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.apron, -1],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.mat, -1],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.corner, -1],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.secondTurnbuckle, 0],
    [RingPositionZ.secondTurnbuckle, RingPositionZ.topTurnbuckle, 1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.floor, -1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.apron, -1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.mat, -1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.corner, -1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.secondTurnbuckle, -1],
    [RingPositionZ.topTurnbuckle, RingPositionZ.topTurnbuckle, 0],
  ])(
    'returns expected values along the Z-axis (%d to %d = %d)',
    (fromPositionZ, toPositionZ, zDirection) => {
      const fromPosition: RingPosition = {
        ...DEFAULT_POSITION,
        z: fromPositionZ,
      };

      const toPosition: RingPosition = {
        ...DEFAULT_POSITION,
        z: toPositionZ,
      };

      expect(getDirection(fromPosition, toPosition)).toEqual({
        x: 0,
        y: 0,
        z: zDirection,
      });
    }
  );
});

describe('movePositionByDirection', () => {
  test.each([
    [
      {
        x: -100,
        y: 0,
        z: 0,
      },
    ],
    [
      {
        x: 100,
        y: 0,
        z: 0,
      },
    ],
    [
      {
        x: 0,
        y: -100,
        z: 0,
      },
    ],
    [
      {
        x: 0,
        y: 100,
        z: 0,
      },
    ],
    [
      {
        x: 0,
        y: 0,
        z: -100,
      },
    ],
    [
      {
        x: 0,
        y: 0,
        z: 100,
      },
    ],
  ])(
    'throws if the computed position is out of bounds (distance = %j)',
    (direction) => {
      expect(() =>
        movePositionByDirection(DEFAULT_POSITION, direction)
      ).toThrow();
    }
  );

  it('returns the same position values if direction is zero', () => {
    expect(movePositionByDirection(DEFAULT_POSITION, DEFAULT_POSITION)).toEqual(
      DEFAULT_POSITION
    );
  });

  it('adjust the position along each direction axis', () => {
    const position = {
      x: RingPositionX.middle,
      y: RingPositionY.middle,
      z: RingPositionZ.mat,
    };
    const direction: RingPosition = {
      x: -1,
      y: 1,
      z: 2,
    };

    expect(movePositionByDirection(position, direction)).toEqual({
      x: RingPositionX.west,
      y: RingPositionY.north,
      z: RingPositionZ.secondTurnbuckle,
    });
  });
});
