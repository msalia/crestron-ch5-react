export const CrestronConfigs: {
  host: string;
  ipID: string;
  port: number;
} = {
  host: '192.168.1.1',
  ipID: Number(10).toString(16), // Decimal: 10 converted to Hex
  port: 41794,
};

export enum ConversionValues {
  MAX_DECIMAL = 65535,
}
