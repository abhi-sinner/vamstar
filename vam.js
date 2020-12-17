const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url,{
        waitUntil: 'load',
        timeout: 0
    

    }).then(function() {
         return page.content();
    });
  })
  .then(function(html) {
   
    
    $('.col-sm-6.lbl-licitacao', html).each(function() {
      console.log($(this).text());
    });
    $('.lbl-licitacao', html).each(function() {
        console.log($(this).text());
      });
    $('.col-sm-6 lbl-licitacao', html).each(function() {
        console.log($(this).text());
      });
      $('.col-sm-6 lbl-licitacao >a', html).each(function() {
        console.log($(this).text());
      });  
    
  })
  .catch(function(err) {
      console.log(err)
    
  });

