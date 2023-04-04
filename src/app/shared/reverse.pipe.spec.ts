import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should reverse a string properly', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
