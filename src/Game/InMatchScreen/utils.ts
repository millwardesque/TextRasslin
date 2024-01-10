import {
  RingPosition,
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerInMatch,
  WrestlerPosture,
} from '../types';

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function describeWrestler(wrestler: WrestlerInMatch): string {
  const { position, posture } = wrestler;

  const zDescription = describeWrestlerPositionZ(position.z);
  const xyDescription = describeWrestlerPositionXY(position.x, position.y);
  const postureDescription = describeWrestlerPosture(posture);

  const description = zDescription
    .replace('#POSTURE#', postureDescription)
    .replace('#POSITION#', xyDescription);

  return description;
}

function describeWrestlerPositionXY(
  x: RingPositionX,
  y: RingPositionY
): string {
  if (x === RingPositionX.middle && y === RingPositionY.middle) {
    return 'middle of the';
  } else if (x === RingPositionX.middle) {
    return `${RingPositionY[y]} side`;
  } else if (y === RingPositionY.middle) {
    return `${RingPositionX[x]} side`;
  } else {
    return `${RingPositionY[y]}-${RingPositionX[x]} corner of the`;
  }
}

function describeWrestlerPositionZ(position: RingPositionZ): string {
  switch (position) {
    case RingPositionZ.apron:
      return '#POSTURE# on the #POSITION# apron';
    case RingPositionZ.corner:
      return '#POSTURE# in the #POSITION# corner';
    case RingPositionZ.floor:
      return '#POSTURE# on the #POSITION# floor';
    case RingPositionZ.mat:
      return '#POSTURE# in the #POSITION# ring';
    case RingPositionZ.secondTurnbuckle:
      return '#POSTURE# on the #POSITION# second turnbuckle';
    case RingPositionZ.topTurnbuckle:
      return '#POSTURE# on the top #POSITION# turnbuckle';
    default:
      throw new Error(`Unhandled z-position ${position}`);
  }
}

function describeWrestlerPosture(posture: WrestlerPosture): string {
  switch (posture) {
    case 'prone':
      return 'lying prone';
    case 'running':
      return 'running';
    case 'standing':
      return 'standing';
    default:
      throw new Error(`Unhandled posture ${posture}`);
  }
}

export function getDirection(
  from: RingPosition,
  to: RingPosition
): RingPosition {
  const xDirection: RingPositionX = clamp(to.x - from.x, -1, 1);
  const yDirection: RingPositionY = clamp(to.y - from.y, -1, 1);
  const zDirection: RingPositionZ = clamp(to.z - from.z, -1, 1);

  return {
    x: xDirection,
    y: yDirection,
    z: zDirection,
  };
}
