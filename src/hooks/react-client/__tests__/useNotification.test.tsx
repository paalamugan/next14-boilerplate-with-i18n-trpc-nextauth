import { render, screen } from '@testing-library/react';

import useNotification from '@/hooks/react-client/useNotification';
import { NotificationProvider } from '@/providers/NotificationProvider';

describe('useNotification', () => {
  it('should return the notification dispatch function', () => {
    // Arrange
    const TestComponent = () => {
      const notificationDispatch = useNotification();
      return (
        <div>
          {typeof notificationDispatch === 'function'
            ? 'Dispatch available'
            : 'Dispatch unavailable'}
        </div>
      );
    };

    // Act
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    // Assert
    const result = screen.getByText('Dispatch available');
    expect(result).toBeInTheDocument();
  });

  it('should return null outside NotificationProvider', () => {
    // Arrange
    const TestComponent = () => {
      const notificationDispatch = useNotification();
      return (
        <div>
          {typeof notificationDispatch !== 'function'
            ? 'Dispatch available'
            : 'Dispatch unavailable'}
        </div>
      );
    };

    // Act
    render(<TestComponent />);

    // Assert
    const result = screen.queryAllByText((_content, element) => {
      return element?.textContent === 'Dispatch unavailable';
    });

    expect(result).toHaveLength(3);
  });
});
