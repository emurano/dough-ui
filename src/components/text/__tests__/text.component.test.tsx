import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Text } from '../text.component.tsx';
import styles from '../text.module.scss';

describe('<Text />', () => {
  it('test id is used by the component', () => {
    render(<Text testId="test-element">Hello, World!</Text>);

    const element = screen.getByTestId('test-element');

    expect(element).toBeInTheDocument();
  });

  it('text provided in children is rendered within the component', () => {
    render(
      <Text testId="test-element">This text should appear on the page</Text>
    );

    const element = screen.getByTestId('test-element');

    expect(element).toHaveTextContent('This text should appear on the page');
  });

  it('uses the medium css class when no size is provided', () => {
    render(<Text testId="test-element">Hello, World!</Text>);

    const element = screen.getByTestId('test-element');

    expect(element).toHaveClass(styles.Size_medium);
  });

  it('uses the medium css class when size prop is medium', () => {
    render(
      <Text testId="test-element" size="medium">
        Hello, World!
      </Text>
    );

    const element = screen.getByTestId('test-element');

    expect(element).toHaveClass(styles.Size_medium);
  });

  it('uses the small css class when size prop is small', () => {
    render(
      <Text testId="test-element" size="small">
        Hello, World!
      </Text>
    );

    const element = screen.getByTestId('test-element');

    expect(element).toHaveClass(styles.Size_small);
  });

  it('uses the large css class when size prop is large', () => {
    render(
      <Text testId="test-element" size="large">
        Hello, World!
      </Text>
    );

    const element = screen.getByTestId('test-element');

    expect(element).toHaveClass(styles.Size_large);
  });
});
