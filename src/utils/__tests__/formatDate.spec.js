const { formatDate } = require('../formatDate');

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = new Date();
    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    );
  });
});
