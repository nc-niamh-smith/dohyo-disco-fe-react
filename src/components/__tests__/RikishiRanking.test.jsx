import {describe, it, expect} from 'vitest'
import RikishiRanking from '../RikishiRanking.jsx'
import {render, screen} from '@testing-library/react'

beforeEach(() => {
    render(<RikishiRanking/>)
})

describe('RikishiRanking component', () => {
    it('should render the rikishi component with heading', () => {
        expect(screen.getByRole('heading', {name: 'Rikishi Ranking'})).toBeInTheDocument();
    });
    it('should render the rikishi component with a list with list items', () => {
        const list = screen.getByRole('list')
        const listItems = screen.getAllByRole('listitem')
        expect(list).toBeInTheDocument()
        expect(listItems.length > 0).toBe(true)
        });
});