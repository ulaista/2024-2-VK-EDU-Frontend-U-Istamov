/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
});

test('Возвращает true значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123)).toBe('120.24 KB');
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1073741824)).toBe('1 GB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');
});

test('Граничные случаи', () => {
  expect(convertBytesToHuman(1)).toBe('1 B');
  expect(convertBytesToHuman(1023)).toBe('1023 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
});

test('Проверка с большими числами', () => {
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB');
  expect(convertBytesToHuman(1125899906842624)).toBe('1 PB');
});

test('Проверка на точность округления', () => {
  expect(convertBytesToHuman(123456789)).toBe('117.74 MB');
  expect(convertBytesToHuman(1234567)).toBe('1.18 MB');
});

test('Проверка крайних значений', () => {
  expect(convertBytesToHuman(Number.MAX_SAFE_INTEGER)).toBe('8 PB');
});

test('Проверка с числами в научной нотации', () => {
  expect(convertBytesToHuman(1e3)).toBe('1000 B');
  expect(convertBytesToHuman(1e6)).toBe('976.56 KB');
  expect(convertBytesToHuman(1e9)).toBe('953.67 MB');
  expect(convertBytesToHuman(1e12)).toBe('931.32 GB');
  expect(convertBytesToHuman(1e15)).toBe('909.49 TB');
  expect(convertBytesToHuman(1e18)).toBe('888.18 PB');
});

test('Проверка чисел с плавающей точкой', () => {
  expect(convertBytesToHuman(123.456)).toBe('123.46 B');
  expect(convertBytesToHuman(1024.567)).toBe('1 KB');
});