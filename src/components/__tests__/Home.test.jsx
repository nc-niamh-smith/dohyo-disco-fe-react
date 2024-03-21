import {describe, it, expect} from 'vitest'
import Home from '../Home.jsx'
import {render, screen} from '@testing-library/react'

describe('Home component', () => {
    it('should render the rikishi component with heading', () => {
        render(<Home/>)
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
    it('should render the rikishi component with a list', () => {
        render(<Home/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    });
});