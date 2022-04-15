import type {
  IEmulatorScenario,
  IEmulatorCue,
  TScenarioOnStart,
} from '@crestron/ch5-crcomlib';

const cues: IEmulatorCue[] = [
  {
    type: 'number',
    event: '1',
    trigger: '&change',
    actions: [{state: '1', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '1',
    trigger: true,
    actions: [
      {state: '1', type: 'boolean', logic: 'set', value: true},
      {state: '1', type: 'number', logic: 'increment', offset: 655},
    ],
  },
];

const onStart: TScenarioOnStart[] = [
  {state: '1', type: 'number', value: 65535},
  {state: '1', type: 'boolean', value: true},
];

const scenario: IEmulatorScenario = {cues, onStart};

export default scenario;
