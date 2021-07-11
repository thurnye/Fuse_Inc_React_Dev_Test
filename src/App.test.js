import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "./App"


describe('Async Component', () => {
    test(`renders Coins if request succeeds`, async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        })
        render(<App/>)

        // const listItemElement = await screen.findAllByRole('listitem')

        // expect(listItemElement).not.toHaveLength(0);
    })
})