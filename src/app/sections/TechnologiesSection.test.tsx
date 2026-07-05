import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Technologies } from './TechnologiesSection'

describe('Technologies', () => {
  it('renders the section heading', () => {
    render(<Technologies />)
    expect(screen.getByText(/Technologies we master/i)).toBeInTheDocument()
  })

  it('renders React technology badge', () => {
    render(<Technologies />)
    expect(screen.getByText(/React/i)).toBeInTheDocument()
  })
})
