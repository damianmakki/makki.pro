import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Resume from './Resume';
import career from '../data/career.json';

afterEach(cleanup);

test('keeps compact positions and offers an actual PDF download', () => {
  render(<Resume />);
  expect(screen.getByText('Download PDF').closest('a')).toHaveAttribute('href', '/damian-makki-resume.pdf');
  expect(screen.getByText('Download PDF').closest('a')).toHaveAttribute('download', 'Damian-Makki-Resume.pdf');
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(career.sections.flatMap(section => section.entries).length);
  for (const section of career.sections) {
    for (const entry of section.entries.filter(entry => entry.reviewStatus === 'draft')) {
      expect(screen.queryByText(entry.description)).not.toBeInTheDocument();
      expect(screen.queryByText(entry.summary)).not.toBeInTheDocument();
    }
  }
  expect(screen.getByRole('heading', { name: 'Front-End Developer at Apple' })).toBeInTheDocument();
});

test('an approved description appears without changing the role layout', () => {
  const entry = career.sections[0].entries[0];
  const original = entry.reviewStatus;
  try {
    entry.reviewStatus = 'approved';
    render(<Resume />);
    expect(screen.getByText(entry.description)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Front-End Developer at Apple' })).toBeInTheDocument();
  } finally {
    entry.reviewStatus = original;
  }
});
