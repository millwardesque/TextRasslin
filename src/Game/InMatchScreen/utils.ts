import {
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerInMatch,
  WrestlerPosture,
} from '../types';

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
  if (x === 'middle' && y === 'middle') {
    return 'middle of the';
  } else if (x === 'middle') {
    return `${y} side`;
  } else if (y === 'middle') {
    return `${x} side`;
  } else {
    return `${y}-${x} corner of the`;
  }
}

function describeWrestlerPositionZ(position: RingPositionZ): string {
  switch (position) {
    case 'apron':
      return '#POSTURE# on the #POSITION# apron';
    case 'corner':
      return '#POSTURE# in the #POSITION# corner';
    case 'floor':
      return '#POSTURE# on the #POSITION# floor';
    case 'mat':
      return '#POSTURE# in the #POSITION# ring';
    case 'second-turnbuckle':
      return '#POSTURE# on the #POSITION# second turnbuckle';
    case 'top-turnbuckle':
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
