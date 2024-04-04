import {describe, it, expect} from 'vitest'
import Home from '../Home.jsx'
import {render, screen} from '@testing-library/react'

describe('Home component', () => {
    it('should render the rikishi component with heading', () => {
        render(<Home/>)
        expect(screen.getByText('Rikishi Ranking')).toBeInTheDocument();
    });
});