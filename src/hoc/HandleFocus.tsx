import React, { useRef } from 'react';

type THandleFocus = {
  children: (props: {
    ref: React.RefObject<HTMLInputElement>;
    handleFocus: () => void;
  }) => JSX.Element;
};

export default function HandleFocus({ children }: THandleFocus) {
  const ref = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (ref.current && typeof ref.current === 'object' && 'focus' in ref.current) {
      ref.current.focus();
    }
    if (ref.current && typeof ref.current === 'object' && 'showPicker' in ref.current) {
      ref.current.showPicker();
    }
  };

  return children({ ref, handleFocus });
}
