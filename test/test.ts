// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null, unicorn/numeric-separators-style */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import dateTimeFunctions, { type DateString } from '../index.js'

const testInvalidString = 'invalid string'

const testDate = new Date(1970, 2 - 1, 1)
const testDateString: DateString = '1970-02-01'
const testDateNumber = 19700201

const testInvalidDateStrings = [
  '19700101',
  '010101',
  'abcd',
  undefined,
  null,
  0,
  {}
]

const testInvalidDateNumbers = [
  -20230101,
  5,
  20230101.5,
  '010101',
  'abcd',
  undefined,
  null,
  {}
]

const testTimeDate = new Date(1970, 2 - 1, 1, 4, 56)
const testTimeString = '04:56'
const testTimePeriodString = '4:56 a.m.'
const testTimeNumber = 456

const testInvalidTimeStrings = [
  '456',
  'abcd',
  undefined,
  null,
  0,
  {}
]

const testInvalidTimeNumbers = [
  -45,
  3000,
  'abcd',
  undefined,
  null,
  {}
]

await describe('dateTimeFns', async () => {
  await describe('#isValidDateString', async () => {
    await it(`Returns true for "${testDateString}"`, () => {
      assert.ok(dateTimeFunctions.isValidDateString(testDateString))
    })

    for (const invalidDateString of testInvalidDateStrings) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await it(`Returns false for "${invalidDateString}"`, () => {
        assert.ok(!dateTimeFunctions.isValidDateString(invalidDateString))
      })
    }
  })

  await describe('#isValidDateInteger', async () => {
    await it(`Returns true for ${testDateNumber}`, () => {
      assert.ok(dateTimeFunctions.isValidDateInteger(testDateNumber))
    })

    for (const testInvalidDateNumber of testInvalidDateNumbers) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await it(`Returns false for "${testInvalidDateNumber}"`, () => {
        assert.ok(!dateTimeFunctions.isValidDateInteger(testInvalidDateNumber))
      })
    }
  })

  await describe('#dateToInteger()', async () => {
    await it(`Converts Date to ${testDateNumber}`, () => {
      const evaluatedNumber = dateTimeFunctions.dateToInteger(testDate)

      assert.ok(dateTimeFunctions.isValidDateInteger(evaluatedNumber))
      assert.strictEqual(evaluatedNumber, testDateNumber)
    })

    await it('Converts undefined to undefined', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.dateToInteger(undefined),
        undefined
      )
    })
  })

  await describe('#dateToString()', async () => {
    await it(`Converts "${testDate.toLocaleString()}" to "${testDateString}"`, () => {
      const evaluatedString = dateTimeFunctions.dateToString(testDate)

      assert.ok(dateTimeFunctions.isValidDateString(evaluatedString))
      assert.strictEqual(evaluatedString, testDateString)
    })

    await it('Converts undefined to ""', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.dateToString(undefined),
        ''
      )
    })
  })

  await describe('#dateIntegerToString()', async () => {
    await it(`Converts ${testDateNumber} to "${testDateString}"`, () => {
      const evaluatedString =
        dateTimeFunctions.dateIntegerToString(testDateNumber)

      assert.ok(dateTimeFunctions.isValidDateString(evaluatedString))
      assert.strictEqual(evaluatedString, testDateString)
    })

    await it('Converts null to ""', () => {
      assert.strictEqual(dateTimeFunctions.dateIntegerToString(null), '')
    })
  })

  await describe('#dateIntegerToDate()', async () => {
    await it(`Converts ${testDateNumber} to "${testDate.toLocaleString()}"`, () => {
      const evaluatedDate = dateTimeFunctions.dateIntegerToDate(testDateNumber)

      assert.ok(evaluatedDate)
      assert.strictEqual(evaluatedDate.getTime(), testDate.getTime())
    })

    await it('Converts null to undefined', () => {
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      assert.strictEqual(dateTimeFunctions.dateIntegerToDate(null), undefined)
    })

    await it('Converts 0 to null', () => {
      assert.strictEqual(dateTimeFunctions.dateIntegerToDate(0), undefined)
    })
  })

  await describe('#dateStringToDate()', async () => {
    await it(`Converts "${testDateString}" to "${testDate.toLocaleString()}"`, () => {
      const evaluatedDate = dateTimeFunctions.dateStringToDate(testDateString)

      assert.ok(evaluatedDate)
      assert.strictEqual(evaluatedDate.getTime(), testDate.getTime())
    })

    await it(`Converts "${testDateString} ${testTimeString}" to "${testTimeDate.toLocaleString()}"`, () => {
      const evaluatedDate = dateTimeFunctions.dateStringToDate(
        testDateString,
        testTimeString
      )

      assert.ok(evaluatedDate)
      assert.strictEqual(evaluatedDate.getTime(), testTimeDate.getTime())
    })

    await it(`Converts "${testInvalidString}" to undefined`, () => {
      assert.strictEqual(
        dateTimeFunctions.dateStringToDate(testInvalidString),
        undefined
      )
    })
  })

  await describe('#dateStringToInteger()', async () => {
    await it(`Converts "${testDateString}" to ${testDateNumber}`, () => {
      const evaluatedNumber =
        dateTimeFunctions.dateStringToInteger(testDateString)

      assert.ok(dateTimeFunctions.isValidDateInteger(evaluatedNumber))
      assert.strictEqual(evaluatedNumber, testDateNumber)
    })

    await it(`Converts "${testInvalidString}" to undefined`, () => {
      assert.strictEqual(
        dateTimeFunctions.dateStringToInteger(testInvalidString),
        undefined
      )
    })
  })

  await describe('#isValidTimeString', async () => {
    await it(`Returns true for "${testTimeString}"`, () => {
      assert.ok(dateTimeFunctions.isValidTimeString(testTimeString))
    })

    for (const invalidTimeString of testInvalidTimeStrings) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await it(`Returns false for "${invalidTimeString}"`, () => {
        assert.ok(!dateTimeFunctions.isValidTimeString(invalidTimeString))
      })
    }
  })

  await describe('#isValidTimeInteger', async () => {
    await it(`Returns true for ${testTimeNumber}`, () => {
      assert.ok(dateTimeFunctions.isValidTimeInteger(testTimeNumber))
    })

    for (const testInvalidTimeNumber of testInvalidTimeNumbers) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await it(`Returns false for "${testInvalidTimeNumber}"`, () => {
        assert.ok(!dateTimeFunctions.isValidTimeInteger(testInvalidTimeNumber))
      })
    }
  })

  await describe('#dateToTimeInteger()', async () => {
    await it(`Converts "${testTimeDate.toLocaleString()}" to ${testTimeNumber}`, () => {
      const evaluatedNumber = dateTimeFunctions.dateToTimeInteger(testTimeDate)

      assert.ok(dateTimeFunctions.isValidTimeInteger(evaluatedNumber))
      assert.strictEqual(evaluatedNumber, testTimeNumber)
    })

    await it('Converts undefined to undefined', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.dateToTimeInteger(undefined),
        undefined
      )
    })
  })

  await describe('#dateToTimeString()', async () => {
    await it(`Converts "${testTimeDate.toLocaleString()}" to "${testTimeString}"`, () => {
      const evaluatedString = dateTimeFunctions.dateToTimeString(testTimeDate)

      assert.ok(dateTimeFunctions.isValidTimeString(evaluatedString))
      assert.strictEqual(evaluatedString, testTimeString)
    })

    await it('Converts undefined to ""', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      assert.strictEqual(dateTimeFunctions.dateToTimeString(undefined), '')
    })
  })

  await describe('#dateToTimePeriodString()', async () => {
    await it(`Converts "${testTimeDate.toLocaleString()}" to "${testTimePeriodString}"`, () => {
      assert.strictEqual(
        dateTimeFunctions.dateToTimePeriodString(testTimeDate),
        testTimePeriodString
      )
    })

    await it('Converts undefined to ""', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.dateToTimePeriodString(undefined),
        ''
      )
    })
  })

  await describe('#timeIntegerToString()', async () => {
    await it(`Converts ${testTimeNumber} to "${testTimeString}"`, () => {
      const evaluatedString =
        dateTimeFunctions.timeIntegerToString(testTimeNumber)

      assert.ok(dateTimeFunctions.isValidTimeString(evaluatedString))
      assert.strictEqual(evaluatedString, testTimeString)
    })

    await it('Converts 0 to "00:00"', () => {
      assert.strictEqual(dateTimeFunctions.timeIntegerToString(0), '00:00')
    })

    await it('Converts undefined to "00:00"', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.timeIntegerToString(undefined),
        '00:00'
      )
    })
  })

  await describe('#timeIntegerToPeriodString()', async () => {
    await it(`Converts ${testTimeNumber} to "${testTimePeriodString}"`, () => {
      assert.strictEqual(
        dateTimeFunctions.timeIntegerToPeriodString(testTimeNumber),
        testTimePeriodString
      )
    })

    await it('Converts 0 to "12:00 a.m."', () => {
      assert.strictEqual(
        dateTimeFunctions.timeIntegerToPeriodString(0),
        '12:00 a.m.'
      )
    })

    await it('Converts null to "12:00 a.m."', () => {
      assert.strictEqual(
        dateTimeFunctions.timeIntegerToPeriodString(null),
        '12:00 a.m.'
      )
    })

    await it('Converts undefined to "12:00 a.m."', () => {
      assert.strictEqual(
        // eslint-disable-next-line unicorn/no-useless-undefined
        dateTimeFunctions.timeIntegerToPeriodString(undefined),
        '12:00 a.m.'
      )
    })
  })

  await describe('#timeStringToInteger()', async () => {
    await it(`Converts "${testTimeString}" to ${testTimeNumber}`, () => {
      const evaluatedNumber =
        dateTimeFunctions.timeStringToInteger(testTimeString)

      assert.ok(dateTimeFunctions.isValidTimeInteger(evaluatedNumber))
      assert.strictEqual(evaluatedNumber, testTimeNumber)
    })

    await it(`Converts "${testInvalidString}" to undefined`, () => {
      assert.strictEqual(
        dateTimeFunctions.timeStringToInteger(testInvalidString),
        undefined
      )
    })
  })
})
