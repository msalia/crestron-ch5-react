// @flow

import * as CrComLib from '@crestron/ch5-crcomlib';
import {useCallback, useEffect, useState} from 'react';

// Generic hook to handle common logic of send and receive
function useSignalState<T: number | boolean | string>(
  type: 'boolean' | 'number' | 'string',
  signalName: string,
  defaultValue: T,
): T {
  const [feedback, setFeedback] = useState<T>(defaultValue);

  useEffect(() => {
    const subscriptionID = CrComLib.subscribeState(
      type,
      signalName,
      setFeedback,
    );
    return () => {
      CrComLib.unsubscribeState(type, signalName, subscriptionID);
    };
  }, [type, signalName]);

  return feedback;
}

export function useAnalogState(signalName: string): number {
  return useSignalState<number>('number', signalName, 0);
}

export function useDigitalState(signalName: string): boolean {
  return useSignalState<boolean>('boolean', signalName, false);
}

export function useStringState(signalName: string): string {
  return useSignalState<string>('string', signalName, '');
}

export function usePublishAnalog(signalName: string): (number) => void {
  return useCallback(
    (value: number) => {
      CrComLib.publishEvent('number', signalName, value);
    },
    [signalName],
  );
}

export function usePublishDigital(
  signalName: string,
  delay?: number = 200,
): () => void {
  return useCallback(() => {
    CrComLib.publishEvent('boolean', signalName, true);
    setTimeout(() => {
      CrComLib.publishEvent('boolean', signalName, false);
    }, delay);
  }, [delay, signalName]);
}

export function usePublishDigitalLatch(signalName: string): (boolean) => void {
  return useCallback(
    (value: boolean) => {
      CrComLib.publishEvent('boolean', signalName, value);
    },
    [signalName],
  );
}

export function usePublishString(signalName: string): (string) => void {
  return useCallback(
    (value: string) => {
      CrComLib.publishEvent('string', signalName, value);
    },
    [signalName],
  );
}
