import { CitcPage } from './app.po';

describe('citc App', function() {
  let page: CitcPage;

  beforeEach(() => {
    page = new CitcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
