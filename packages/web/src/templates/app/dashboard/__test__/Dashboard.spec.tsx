import React from 'react';
import { Dashboard } from '../Dashboard';
import { render, screen } from '../../../../../spec';

describe('Dashboard view', () => {
    it('should render', () => {
        render(<Dashboard default />);
        expect(screen.getByTestId('dashboard-view')).toBeInTheDocument();
    });
});
