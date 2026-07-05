import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQ } from './FAQSection'

describe('FAQ', () => {
  it('renders the FAQ title', () => {
    render(<FAQ />)
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument()
  })

  it('shows answer when clicking a question', () => {
    render(<FAQ />)
    const question = screen.getByText(/How long does a typical project take/i)
    fireEvent.click(question)
    expect(screen.getByText(/Most web projects ship in 4–10 weeks/i)).toBeInTheDocument()
  })

  it('toggles answer on second click', () => {
    render(<FAQ />)
    const question = screen.getByText(/Who owns the code after delivery/i)
    fireEvent.click(question)
    expect(screen.getByText(/Full IP transfer/i)).toBeInTheDocument()
    fireEvent.click(question)
    expect(screen.queryByText(/Full IP transfer/i)).not.toBeInTheDocument()
  })
})
