import { describe, it, expect } from 'vitest'
import { sanitize, isValidEmail, simpleRateLimit } from './utils.js'

describe('sanitize', () => {
  it('escapes & to &amp;', () => {
    expect(sanitize('a&b')).toBe('a&amp;b')
  })

  it('escapes < to &lt;', () => {
    expect(sanitize('<script>')).toBe('&lt;script&gt;')
  })

  it('escapes > to &gt;', () => {
    expect(sanitize('a > b')).toBe('a &gt; b')
  })

  it('escapes double quotes to &quot;', () => {
    expect(sanitize('say "hello"')).toBe('say &quot;hello&quot;')
  })

  it('escapes single quotes to &#x27;', () => {
    expect(sanitize("it's")).toBe('it&#x27;s')
  })

  it('handles mixed dangerous characters', () => {
    const input = '<script>alert("xss")</script>'
    const result = sanitize(input)
    expect(result).toContain('&lt;')
    expect(result).toContain('&gt;')
    expect(result).toContain('&quot;')
    expect(result).not.toContain('<')
    expect(result).not.toContain('>')
    expect(result).not.toContain('"')
  })

  it('returns empty string for empty input', () => {
    expect(sanitize('')).toBe('')
  })

  it('converts non-string values to string', () => {
    expect(sanitize(123)).toBe('123')
    expect(sanitize(null)).toBe('null')
    expect(sanitize(undefined)).toBe('undefined')
  })
})

describe('isValidEmail', () => {
  it('accepts valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('a.b@domain.co')).toBe(true)
    expect(isValidEmail('name+tag@company.org')).toBe(true)
  })

  it('rejects emails without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false)
  })

  it('rejects emails without domain', () => {
    expect(isValidEmail('user@')).toBe(false)
  })

  it('rejects emails without TLD', () => {
    expect(isValidEmail('user@domain')).toBe(false)
  })

  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })

  it('rejects null/undefined', () => {
    expect(isValidEmail(null)).toBe(false)
    expect(isValidEmail(undefined)).toBe(false)
  })
})

describe('simpleRateLimit', () => {
  it('allows first request', () => {
    const ip = '192.168.1.1'
    expect(simpleRateLimit(ip)).toBe(true)
  })

  it('allows up to 5 requests from same IP', () => {
    const ip = '10.0.0.1'
    for (let i = 0; i < 5; i++) {
      expect(simpleRateLimit(ip)).toBe(true)
    }
  })
})
