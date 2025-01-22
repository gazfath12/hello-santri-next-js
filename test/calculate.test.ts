
import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '../utils/calculate'

describe('Calculator Functions', () => {
  // Test cases for add function
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1)
      expect(add(2, -3)).toBe(-1)
    })
  })

  // Test cases for subtract function
  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2)
    })

    it('should handle negative results', () => {
      expect(subtract(2, 5)).toBe(-3)
    })
  })

  // Test cases for multiply function
  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6)
    })

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })
  })

  // Test cases for divide function
  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3)
    })

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero')
    })
  })
})