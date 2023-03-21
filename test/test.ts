import * as assert from 'node:assert'
import * as dateTimeFns from '../index.js'

describe('dateTimeFns', () => {
  describe('#dateToInteger()', () => {
    it('Converts new Date(1970, 1 - 1, 1) to 19700101', () => {
      // eslint-disable-next-line unicorn/numeric-separators-style
      assert.strictEqual(
        dateTimeFns.dateToInteger(new Date(1970, 1 - 1, 1)),
        19700101
      )
    })
  })

  describe('#dateToString()', () => {
    it('Converts Date(1970, 1 - 1, 1) to "1970-01-01"', () => {
      assert.strictEqual(
        dateTimeFns.dateToString(new Date(1970, 1 - 1, 1)),
        '1970-01-01'
      )
    })
  })

  describe('#dateIntegerToString()', () => {
    it('Converts 19700101 to "1970-01-01"', () => {
      // eslint-disable-next-line unicorn/numeric-separators-style
      assert.strictEqual(
        dateTimeFns.dateIntegerToString(19700101),
        '1970-01-01'
      )
    })

    it('Converts null to ""', () => {
      // eslint-disable-next-line unicorn/no-null
      assert.strictEqual(dateTimeFns.dateIntegerToString(null), '')
    })
  })

  describe('#dateIntegerToDate()', () => {
    it('Converts 19700101 to Date(1970, 1 - 1, 1)', () => {
      // eslint-disable-next-line unicorn/numeric-separators-style
      assert.strictEqual(
        dateTimeFns.dateIntegerToDate(19700101)!.getTime(),
        new Date(1970, 1 - 1, 1).getTime()
      )
    })

    it('Converts null to undefined', () => {
      // eslint-disable-next-line unicorn/no-null
      assert.strictEqual(dateTimeFns.dateIntegerToDate(null), undefined)
    })

    it('Converts 0 to null', () => {
      assert.strictEqual(dateTimeFns.dateIntegerToDate(0), undefined)
    })
  })

  describe('#dateStringToDate()', () => {
    it('Converts "1970-01-01" to Date(1970, 1 - 1, 1)', () => {
      assert.strictEqual(
        dateTimeFns.dateStringToDate('1970-01-01').getTime(),
        new Date(1970, 1 - 1, 1).getTime()
      )
    })

    it('Converts "1970-01-01 4:56" to Date(1970, 1 - 1, 1, 4, 56)', () => {
      assert.strictEqual(
        dateTimeFns.dateStringToDate('1970-01-01', '4:56').getTime(),
        new Date(1970, 1 - 1, 1, 4, 56).getTime()
      )
    })
  })

  describe('#dateStringToInteger()', () => {
    it('Converts "1970-01-01" to 19700101', () => {
      // eslint-disable-next-line unicorn/numeric-separators-style
      assert.strictEqual(
        dateTimeFns.dateStringToInteger('1970-01-01'),
        19700101
      )
    })
  })

  describe('#dateToTimeInteger()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to 123', () => {
      assert.strictEqual(
        dateTimeFns.dateToTimeInteger(new Date(1970, 1 - 1, 1, 1, 23)),
        123
      )
    })
  })

  describe('#dateToTimeString()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to "01:23"', () => {
      assert.strictEqual(
        dateTimeFns.dateToTimeString(new Date(1970, 1 - 1, 1, 1, 23)),
        '01:23'
      )
    })
  })

  describe('#dateToTimePeriodString()', () => {
    it('Converts new Date(1970, 1 - 1, 1, 1, 23) to "01:23"', () => {
      assert.strictEqual(
        dateTimeFns.dateToTimePeriodString(new Date(1970, 1 - 1, 1, 1, 23)),
        '1:23 a.m.'
      )
    })
  })

  describe('#timeIntegerToString()', () => {
    it('Converts 123 to "01:23"', () => {
      assert.strictEqual(dateTimeFns.timeIntegerToString(123), '01:23')
    })

    it('Converts 0 to "00:00"', () => {
      assert.strictEqual(dateTimeFns.timeIntegerToString(0), '00:00')
    })
  })

  describe('#timeIntegerToPeriodString()', () => {
    it('Converts 123 to "1:23 a.m."', () => {
      assert.strictEqual(dateTimeFns.timeIntegerToPeriodString(123), '1:23 a.m.')
    })

    it('Converts 0 to "12:00 a.m."', () => {
      assert.strictEqual(dateTimeFns.timeIntegerToPeriodString(0), '12:00 a.m.')
    })
  })

  describe('#timeStringToInteger()', () => {
    it('Converts "01:23" to 123', () => {
      assert.strictEqual(dateTimeFns.timeStringToInteger('01:23'), 123)
    })
  })
})
