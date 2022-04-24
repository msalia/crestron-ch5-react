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
  {
    type: 'boolean',
    event: '1',
    trigger: false,
    actions: [{state: '1', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'number',
    event: '2',
    trigger: '&change',
    actions: [{state: '2', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '2',
    trigger: true,
    actions: [
      {state: '2', type: 'boolean', logic: 'set', value: true},
      {state: '1', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '2',
    trigger: false,
    actions: [{state: '2', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'number',
    event: '3',
    trigger: '&change',
    actions: [{state: '3', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '3',
    trigger: true,
    actions: [{state: '3', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '3',
    trigger: false,
    actions: [{state: '3', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'number',
    event: '4',
    trigger: '&change',
    actions: [{state: '4', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '4',
    trigger: true,
    actions: [
      {state: '4', type: 'boolean', logic: 'set', value: true},
      {state: '2', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '4',
    trigger: false,
    actions: [{state: '4', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'number',
    event: '5',
    trigger: '&change',
    actions: [{state: '5', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '5',
    trigger: true,
    actions: [
      {state: '5', type: 'boolean', logic: 'set', value: true},
      {state: '2', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '5',
    trigger: false,
    actions: [{state: '5', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'number',
    event: '6',
    trigger: '&change',
    actions: [{state: '6', type: 'number', logic: 'link'}],
  },
  {
    type: 'number',
    event: '7',
    trigger: '&change',
    actions: [{state: '7', type: 'number', logic: 'link'}],
  },
  {
    type: 'boolean',
    event: '7',
    trigger: true,
    actions: [
      {state: '7', type: 'boolean', logic: 'set', value: true},
      {state: '3', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '7',
    trigger: false,
    actions: [{state: '7', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '8',
    trigger: true,
    actions: [
      {state: '8', type: 'boolean', logic: 'set', value: true},
      {state: '3', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '8',
    trigger: false,
    actions: [{state: '8', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '9',
    trigger: true,
    actions: [{state: '9', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '10',
    trigger: true,
    actions: [
      {state: '10', type: 'boolean', logic: 'set', value: true},
      {state: '4', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '10',
    trigger: false,
    actions: [{state: '10', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '11',
    trigger: true,
    actions: [
      {state: '11', type: 'boolean', logic: 'set', value: true},
      {state: '4', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '11',
    trigger: false,
    actions: [{state: '11', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '13',
    trigger: true,
    actions: [
      {state: '13', type: 'boolean', logic: 'set', value: true},
      {state: '5', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '13',
    trigger: false,
    actions: [{state: '13', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '14',
    trigger: true,
    actions: [
      {state: '14', type: 'boolean', logic: 'set', value: true},
      {state: '5', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '14',
    trigger: false,
    actions: [{state: '14', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '16',
    trigger: true,
    actions: [
      {state: '16', type: 'boolean', logic: 'set', value: true},
      {state: '7', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '16',
    trigger: false,
    actions: [{state: '16', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '17',
    trigger: true,
    actions: [
      {state: '17', type: 'boolean', logic: 'set', value: true},
      {state: '7', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '17',
    trigger: false,
    actions: [{state: '17', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '19',
    trigger: true,
    actions: [
      {state: '19', type: 'boolean', logic: 'set', value: true},
      {state: '20', type: 'boolean', logic: 'set', value: false},
      {state: '21', type: 'boolean', logic: 'set', value: false},
      {state: '22', type: 'boolean', logic: 'set', value: false},
    ],
  },
  {
    type: 'boolean',
    event: '20',
    trigger: true,
    actions: [
      {state: '19', type: 'boolean', logic: 'set', value: false},
      {state: '20', type: 'boolean', logic: 'set', value: true},
      {state: '21', type: 'boolean', logic: 'set', value: false},
      {state: '22', type: 'boolean', logic: 'set', value: false},
    ],
  },
  {
    type: 'boolean',
    event: '21',
    trigger: true,
    actions: [
      {state: '19', type: 'boolean', logic: 'set', value: false},
      {state: '20', type: 'boolean', logic: 'set', value: false},
      {state: '21', type: 'boolean', logic: 'set', value: true},
      {state: '22', type: 'boolean', logic: 'set', value: false},
    ],
  },
  {
    type: 'boolean',
    event: '22',
    trigger: true,
    actions: [
      {state: '19', type: 'boolean', logic: 'set', value: false},
      {state: '20', type: 'boolean', logic: 'set', value: false},
      {state: '21', type: 'boolean', logic: 'set', value: false},
      {state: '22', type: 'boolean', logic: 'set', value: true},
    ],
  },
  {
    type: 'boolean',
    event: '23',
    trigger: true,
    actions: [{state: '23', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '23',
    trigger: false,
    actions: [{state: '23', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '24',
    trigger: true,
    actions: [{state: '24', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '24',
    trigger: false,
    actions: [{state: '24', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '25',
    trigger: true,
    actions: [
      {state: '25', type: 'boolean', logic: 'set', value: true},
      {state: '37', type: 'boolean', logic: 'set', value: true},
    ],
  },
  {
    type: 'boolean',
    event: '25',
    trigger: false,
    actions: [
      {state: '25', type: 'boolean', logic: 'set', value: false},
      {state: '37', type: 'boolean', logic: 'set', value: false},
    ],
  },
  {
    type: 'boolean',
    event: '26',
    trigger: true,
    actions: [
      {state: '26', type: 'boolean', logic: 'set', value: true},
      {state: '38', type: 'boolean', logic: 'set', value: true},
    ],
  },
  {
    type: 'boolean',
    event: '26',
    trigger: false,
    actions: [
      {state: '26', type: 'boolean', logic: 'set', value: false},
      {state: '38', type: 'boolean', logic: 'set', value: false},
    ],
  },
  {
    type: 'boolean',
    event: '27',
    trigger: true,
    actions: [{state: '27', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '27',
    trigger: false,
    actions: [{state: '27', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '28',
    trigger: true,
    actions: [{state: '28', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '28',
    trigger: false,
    actions: [{state: '28', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '29',
    trigger: true,
    actions: [{state: '29', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '29',
    trigger: false,
    actions: [{state: '29', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '30',
    trigger: true,
    actions: [{state: '30', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '30',
    trigger: false,
    actions: [{state: '30', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '31',
    trigger: true,
    actions: [{state: '31', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '31',
    trigger: false,
    actions: [{state: '31', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '32',
    trigger: true,
    actions: [{state: '32', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '32',
    trigger: false,
    actions: [{state: '32', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '33',
    trigger: true,
    actions: [
      {state: '33', type: 'boolean', logic: 'set', value: true},
      {state: '6', type: 'number', logic: 'increment', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '33',
    trigger: false,
    actions: [{state: '33', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '34',
    trigger: true,
    actions: [
      {state: '34', type: 'boolean', logic: 'set', value: true},
      {state: '6', type: 'number', logic: 'decrement', offset: 655},
    ],
  },
  {
    type: 'boolean',
    event: '34',
    trigger: false,
    actions: [{state: '34', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '36',
    trigger: true,
    actions: [{state: '36', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '36',
    trigger: false,
    actions: [{state: '36', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '37',
    trigger: true,
    actions: [{state: '37', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '37',
    trigger: false,
    actions: [{state: '37', type: 'boolean', logic: 'set', value: false}],
  },
  {
    type: 'boolean',
    event: '38',
    trigger: true,
    actions: [{state: '38', type: 'boolean', logic: 'set', value: true}],
  },
  {
    type: 'boolean',
    event: '38',
    trigger: false,
    actions: [{state: '38', type: 'boolean', logic: 'set', value: false}],
  },
];

const onStart: TScenarioOnStart[] = [
  {state: '1', type: 'number', value: 65535},
  {state: '2', type: 'number', value: 32768},
  {state: '3', type: 'number', value: 15000},
  {state: '4', type: 'number', value: 9000},
  {state: '5', type: 'number', value: 25000},
  {state: '6', type: 'number', value: 16384},
  {state: '7', type: 'number', value: 49151},
  {state: '19', type: 'boolean', value: true},
  {state: '25', type: 'boolean', value: true},
  {state: '27', type: 'boolean', value: true},
  {state: '28', type: 'boolean', value: false},
  {state: '29', type: 'boolean', value: false},
  {state: '30', type: 'boolean', value: false},
  {state: '31', type: 'boolean', value: false},
  {state: '32', type: 'boolean', value: false},
  {state: '36', type: 'boolean', value: false},
];

const scenario: IEmulatorScenario = {cues, onStart};

export default scenario;
