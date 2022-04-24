export const CrestronConfigs: {
  host: string;
  ipID: string;
  port: number;
} = {
  host: '192.168.1.1',
  // Decimal: 10 converted to Hex: '0x0A'
  ipID: `0x0${Number(10).toString(16).slice(-2).toUpperCase()}`,
  port: 41794,
};
