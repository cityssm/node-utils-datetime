// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/no-identical-expressions, unicorn/numeric-separators-style */

import assert from 'node:assert'

import dateTimeFunctions from '../index.js'

describe('dateTimeFns', () => {
  describe('#dateToInteger()', () => {
    it('Converts new Date(1970, 1 - 1, 1) to 19700101', () => {
      assert.strictEqual(
        dateTimeFunctions.dateToInteger(new Date(1970, 1 - 1, 1)),
        19700101
      )
    })
  })

  describe('#dateToString()', () => {
    it('Converts Date(1970, 1 - 1, 1) to "1970-01-01"', () => {
      assert.strictEqual(
        dateTimeFunctions.dateToString(new Date(1970, 1 - 1, 1)),
        '1970-01-01'
      )
    })
  })

  describe('#dateIntegerToString()', () => {
    it('Converts 19700101 to "1970-01-01"', () => {
      assert.strictEqual(
        dateTimeFunctions.dateIntegerToString(19700101),
        '1970-01-01'
      )
    })

    it('Converts null to ""', () => {
      // eslint-disable-next-line unicorn/no-null
      assert.strictEqual(dateTimeFunctions.dateIntegerToString(null), '')
    })
  })

  describe('#dateIntegerToDate()', () => {
    it('Converts 19700101 to Date(1970, 1 - 1, 1)', () => {
      assert.strictEqual(
        dateTimeFunctions.dateIntegerToDate(19700101).getTime(),
        new Date(1970, 1 - 1, 1).getTime()
      )
    })

    it('Converts null to undefined', () => {
      // eslint-disable-next-line unicorn/no-null, @typescript-eslint/no-confusing-void-expression
      assert.strictEqual(dateTimeFunctions.dateIntegerToDate(null), undefined)
    })

    it('Converts 0 to null', () => {
      assert.strictEqual(dateTimeFunctions.dateIntegerToDate(0), undefined)
    })
  })

  describe('#dateStringToDate()', () => {
    it('Converts "1970-01-01" to Date(1970, 1 - 1, 1)', () => {
      assert.strictEqual(
        dateTimeFunctions.dateStringToDate('1970-01-01').getTime(),
        new Date(1970, 1 - 1, 1).getTime()
      )
    })

    it('Converts "1970-01-01 4:56" to Date(1970, 1 - 1, 1, 4, 56)', () => {
      assert.strictEqual(
        dateTimeFunctions.dateStringToDate('1970-01-01', '4:56').getTime(),
        new Date(1970, 1 - 1, 1, 4, 56).getTime()
      )
    })
  })

  describe('#dateStringToInteger()', () => {
    it('Converts "1970-01-01" to 19700101', () => {
      assert.strictEqual(
        dateTimeFunctions.dateStringToInteger('1970-01-01'),
        19700101
      )
    })
  })

  describe('#dateToTimeInteger()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to 123', () => {
      assert.strictEqual(
        dateTimeFunctions.dateToTimeInteger(new Date(1970, 1 - 1, 1, 1, 23)),
        123
      )
    })
  })

  describe('#dateToTimeString()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to "01:23"', () => {
      assert.strictEqual(
        dateTimeFunctions.dateToTimeString(new Date(1970, 1 - 1, 1, 1, 23)),
        '01:23'
      )
    })
  })

  describe('#dateToTimePeriodString()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to "01:23"', () => {
      assert.strictEqual(
        dateTimeFunctions.dateToTimePeriodString(
          new Date(1970, 1 - 1, 1, 1, 23)
        ),
        '1:23 a.m.'
      )
    })
  })

  describe('#timeIntegerToString()', () => {
    it('Converts 123 to "01:23"', () => {
      assert.strictEqual(dateTimeFunctions.timeIntegerToString(123), '01:23')
    })

    it('Converts 0 to "00:00"', () => {
      assert.strictEqual(dateTimeFunctions.timeIntegerToString(0), '00:00')
    })
  })

  describe('#timeIntegerToPeriodString()', () => {
    it('Converts 123 to "1:23 a.m."', () => {
      assert.strictEqual(
        dateTimeFunctions.timeIntegerToPeriodString(123),
        '1:23 a.m.'
      )
    })

    it('Converts 0 to "12:00 a.m."', () => {
      assert.strictEqual(
        dateTimeFunctions.timeIntegerToPeriodString(0),
        '12:00 a.m.'
      )
    })
  })

  describe('#timeStringToInteger()', () => {
    it('Converts "01:23" to 123', () => {
      assert.strictEqual(dateTimeFunctions.timeStringToInteger('01:23'), 123)
    })
  })
})
