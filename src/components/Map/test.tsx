import { render, screen } from '@testing-library/react'
import Map from '.'

describe('Name of the group', () => {
  it('should render without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
    // screen.logTestingPlaygroundURL()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const place2 = {
      id: '2',
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro',
      location: {
        latitude: 129,
        longitude: -20
      }
    }

    render(<Map places={[place, place2]} />)
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Rio de Janeiro/i)).toBeInTheDocument()
  })
})
