import { memo } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = memo(({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

export const ChildAsFC: React.FC<ChildProps> = memo(
  ({ color, onClick, children }) => {
    return (
      <div>
        {color}
        <button onClick={onClick}>{children}</button>
      </div>
    );
  }
);
