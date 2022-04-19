import { newE2EPage } from '@stencil/core/testing';

describe('gv-test', () => {
  
  it('renders', async () => {

    const name = "John";
    const lastname = "Doe";
    const age = 20;
    const birthdate = (new Date()).getFullYear() - age + "-01-01"
    const shortName = name.charAt(0) + '. ' + lastname
    const longName = name + ' - ' + lastname
    const age_string = age + ' years'

    const page = await newE2EPage();
    await page.setContent(`<gv-test name="${name}" lastname="${lastname}" birthdate="${birthdate}"></gv-test>`);

    // hydration
    const element = await page.find('gv-test');
    expect(element).toHaveClass('hydrated');


    // short display name
    const h3 = await element.find('h3');
    expect(h3.innerText).toContain(shortName);
    // short display age
    const age_span = await h3.find('span');
    expect(age_span.innerText).toEqualText(age_string);


    const toggle = await element.find('gv-button');
    toggle.click();
    await page.waitForChanges();


    // long display name
    const h1 = await element.find('h1');
    expect(h1.innerText).toContain(longName);
    // long display age
    const birthdate_span = await h1.find('span');
    expect(birthdate_span.innerText).toEqualText(birthdate);
  });
});
