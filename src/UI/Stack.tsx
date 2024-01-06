import styled from 'styled-components';

type StackDirection = 'horizontal' | 'vertical';

const StyledStack = styled.div<{ $direction: StackDirection; $gap?: number }>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'vertical' ? 'column' : 'row'};
  ${({ $gap }) => ($gap !== undefined ? `gap: ${$gap}px;` : '')}
`;

export type StackProps = {
  children: React.ReactNode;
  direction?: StackDirection;
  gap?: number;
};
export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  gap,
}) => {
  return (
    <StyledStack $direction={direction} $gap={gap}>
      {children}
    </StyledStack>
  );
};
