import { HappyPatientPage } from './app.po';

describe('happy-patient App', () => {
  let page: HappyPatientPage;

  beforeEach(() => {
    page = new HappyPatientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
