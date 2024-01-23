import React, { createContext, FC, ReactElement } from 'react';
import { PropsWithChildren } from 'react';
import { useState } from 'react';

export const TaskStatusChangeContext = createContext({
  Updated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export const TaskStatusChangeContextProvider: FC<PropsWithChildren> = (
  props
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function ToggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangeContext.Provider
      value={{ Updated: updated, toggle: ToggleHandler }}
    >
      {props.children}
    </TaskStatusChangeContext.Provider>
  );
};