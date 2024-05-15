import { LoadingOverlay, Portal } from '@mantine/core';
import React from 'react';

type TLoader = {
  isLoading: boolean;
};

export default function Loader({ isLoading }: TLoader) {
  return (
    <>
      {isLoading && (
        <Portal>
          <LoadingOverlay
            visible={isLoading}
            styles={{
              root: {
                zIndex: 10,
              },
            }}
          />
        </Portal>
      )}
    </>
  );
}
