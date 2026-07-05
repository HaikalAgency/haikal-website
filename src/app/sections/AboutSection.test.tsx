import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './AboutSection'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/Engineering-driven/i)).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<About />)
    expect(screen.getByText(/Who We Are/i)).toBeInTheDocument()
  })
})
