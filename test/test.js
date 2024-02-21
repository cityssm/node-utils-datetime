import assert from 'node:assert';
import dateTimeFunctions from '../index.js';
const testInvalidString = 'invalid string';
const testDate = new Date(1970, 2 - 1, 1);
const testDateString = '1970-02-01';
const testDateNumber = 19700201;
const testInvalidDateStrings = [
    '19700101',
    '010101',
    'abcd',
    undefined,
    null,
    0,
    {}
];
const testInvalidDateNumbers = [
    -20230101,
    5,
    20230101.5,
    '010101',
    'abcd',
    undefined,
    null,
    {}
];
const testTimeDate = new Date(1970, 2 - 1, 1, 4, 56);
const testTimeString = '04:56';
const testTimePeriodString = '4:56 a.m.';
const testTimeNumber = 456;
const testInvalidTimeStrings = [
    '456',
    'abcd',
    undefined,
    null,
    0,
    {}
];
const testInvalidTimeNumbers = [
    -45,
    3000,
    'abcd',
    undefined,
    null,
    {}
];
describe('dateTimeFns', () => {
    describe('#isValidDateString', () => {
        it(`Returns true for "${testDateString}"`, () => {
            assert.ok(dateTimeFunctions.isValidDateString(testDateString));
        });
        for (const invalidDateString of testInvalidDateStrings) {
            it(`Returns false for "${invalidDateString}"`, () => {
                assert.ok(!dateTimeFunctions.isValidDateString(invalidDateString));
            });
        }
    });
    describe('#isValidDateInteger', () => {
        it(`Returns true for ${testDateNumber}`, () => {
            assert.ok(dateTimeFunctions.isValidDateInteger(testDateNumber));
        });
        for (const testInvalidDateNumber of testInvalidDateNumbers) {
            it(`Returns false for "${testInvalidDateNumber}"`, () => {
                assert.ok(!dateTimeFunctions.isValidDateInteger(testInvalidDateNumber));
            });
        }
    });
    describe('#dateToInteger()', () => {
        it(`Converts Date to ${testDateNumber}`, () => {
            const evaluatedNumber = dateTimeFunctions.dateToInteger(testDate);
            assert.ok(dateTimeFunctions.isValidDateInteger(evaluatedNumber));
            assert.strictEqual(evaluatedNumber, testDateNumber);
        });
    });
    describe('#dateToString()', () => {
        it(`Converts "${testDate.toLocaleString()}" to "${testDateString}"`, () => {
            const evaluatedString = dateTimeFunctions.dateToString(testDate);
            assert.ok(dateTimeFunctions.isValidDateString(evaluatedString));
            assert.strictEqual(evaluatedString, testDateString);
        });
    });
    describe('#dateIntegerToString()', () => {
        it(`Converts ${testDateNumber} to "${testDateString}"`, () => {
            const evaluatedString = dateTimeFunctions.dateIntegerToString(testDateNumber);
            assert.ok(dateTimeFunctions.isValidDateString(evaluatedString));
            assert.strictEqual(evaluatedString, testDateString);
        });
        it('Converts null to ""', () => {
            assert.strictEqual(dateTimeFunctions.dateIntegerToString(null), '');
        });
    });
    describe('#dateIntegerToDate()', () => {
        it(`Converts ${testDateNumber} to "${testDate.toLocaleString()}"`, () => {
            const evaluatedDate = dateTimeFunctions.dateIntegerToDate(testDateNumber);
            assert.ok(evaluatedDate);
            assert.strictEqual(evaluatedDate.getTime(), testDate.getTime());
        });
        it('Converts null to undefined', () => {
            assert.strictEqual(dateTimeFunctions.dateIntegerToDate(null), undefined);
        });
        it('Converts 0 to null', () => {
            assert.strictEqual(dateTimeFunctions.dateIntegerToDate(0), undefined);
        });
    });
    describe('#dateStringToDate()', () => {
        it(`Converts "${testDateString}" to "${testDate.toLocaleString()}"`, () => {
            const evaluatedDate = dateTimeFunctions.dateStringToDate(testDateString);
            assert.ok(evaluatedDate);
            assert.strictEqual(evaluatedDate.getTime(), testDate.getTime());
        });
        it(`Converts "${testDateString} ${testTimeString}" to "${testTimeDate.toLocaleString()}"`, () => {
            const evaluatedDate = dateTimeFunctions.dateStringToDate(testDateString, testTimeString);
            assert.ok(evaluatedDate);
            assert.strictEqual(evaluatedDate.getTime(), testTimeDate.getTime());
        });
        it(`Converts "${testInvalidString}" to undefined`, () => {
            assert.strictEqual(dateTimeFunctions.dateStringToDate(testInvalidString), undefined);
        });
    });
    describe('#dateStringToInteger()', () => {
        it(`Converts "${testDateString}" to ${testDateNumber}`, () => {
            const evaluatedNumber = dateTimeFunctions.dateStringToInteger(testDateString);
            assert.ok(dateTimeFunctions.isValidDateInteger(evaluatedNumber));
            assert.strictEqual(evaluatedNumber, testDateNumber);
        });
        it(`Converts "${testInvalidString}" to undefined`, () => {
            assert.strictEqual(dateTimeFunctions.dateStringToInteger(testInvalidString), undefined);
        });
    });
    describe('#isValidTimeString', () => {
        it(`Returns true for "${testTimeString}"`, () => {
            assert.ok(dateTimeFunctions.isValidTimeString(testTimeString));
        });
        for (const invalidTimeString of testInvalidTimeStrings) {
            it(`Returns false for "${invalidTimeString}"`, () => {
                assert.ok(!dateTimeFunctions.isValidTimeString(invalidTimeString));
            });
        }
    });
    describe('#isValidTimeInteger', () => {
        it(`Returns true for ${testTimeNumber}`, () => {
            assert.ok(dateTimeFunctions.isValidTimeInteger(testTimeNumber));
        });
        for (const testInvalidTimeNumber of testInvalidTimeNumbers) {
            it(`Returns false for "${testInvalidTimeNumber}"`, () => {
                assert.ok(!dateTimeFunctions.isValidTimeInteger(testInvalidTimeNumber));
            });
        }
    });
    describe('#dateToTimeInteger()', () => {
        it(`Converts "${testTimeDate.toLocaleString()}" to ${testTimeNumber}`, () => {
            const evaluatedNumber = dateTimeFunctions.dateToTimeInteger(testTimeDate);
            assert.ok(dateTimeFunctions.isValidTimeInteger(evaluatedNumber));
            assert.strictEqual(evaluatedNumber, testTimeNumber);
        });
    });
    describe('#dateToTimeString()', () => {
        it(`Converts "${testTimeDate.toLocaleString()}" to "${testTimeString}"`, () => {
            const evaluatedString = dateTimeFunctions.dateToTimeString(testTimeDate);
            assert.ok(dateTimeFunctions.isValidTimeString(evaluatedString));
            assert.strictEqual(evaluatedString, testTimeString);
        });
    });
    describe('#dateToTimePeriodString()', () => {
        it(`Converts "${testTimeDate.toLocaleString()}" to "${testTimePeriodString}"`, () => {
            assert.strictEqual(dateTimeFunctions.dateToTimePeriodString(testTimeDate), testTimePeriodString);
        });
    });
    describe('#timeIntegerToString()', () => {
        it(`Converts ${testTimeNumber} to "${testTimeString}"`, () => {
            const evaluatedString = dateTimeFunctions.timeIntegerToString(testTimeNumber);
            assert.ok(dateTimeFunctions.isValidTimeString(evaluatedString));
            assert.strictEqual(evaluatedString, testTimeString);
        });
        it('Converts 0 to "00:00"', () => {
            assert.strictEqual(dateTimeFunctions.timeIntegerToString(0), '00:00');
        });
    });
    describe('#timeIntegerToPeriodString()', () => {
        it(`Converts ${testTimeNumber} to "${testTimePeriodString}"`, () => {
            assert.strictEqual(dateTimeFunctions.timeIntegerToPeriodString(testTimeNumber), testTimePeriodString);
        });
        it('Converts 0 to "12:00 a.m."', () => {
            assert.strictEqual(dateTimeFunctions.timeIntegerToPeriodString(0), '12:00 a.m.');
        });
    });
    describe('#timeStringToInteger()', () => {
        it(`Converts "${testTimeString}" to ${testTimeNumber}`, () => {
            const evaluatedNumber = dateTimeFunctions.timeStringToInteger(testTimeString);
            assert.ok(dateTimeFunctions.isValidTimeInteger(evaluatedNumber));
            assert.strictEqual(evaluatedNumber, testTimeNumber);
        });
        it(`Converts "${testInvalidString}" to undefined`, () => {
            assert.strictEqual(dateTimeFunctions.timeStringToInteger(testInvalidString), undefined);
        });
    });
});
