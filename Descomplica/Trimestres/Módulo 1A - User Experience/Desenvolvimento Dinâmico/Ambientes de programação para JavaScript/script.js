const puppeteer = require('puppeteer');

async function scrapeNews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.uol.com.br/'); // Substitua pela URL desejada

  // Seleciona todos os elementos que contêm as manchetes (ajuste o seletor conforme a estrutura do site)
  const headlines = await page.$$eval('.headline', headlines => {
    return headlines.map(headline => {
      const link = headline.querySelector('a');
      return {
        title: headline.textContent,
        url: link ? link.href : ''
      };
    });
  });

  console.log(headlines);

  await browser.close();
}

scrapeNews();
