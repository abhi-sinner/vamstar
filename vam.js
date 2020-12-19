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
   
    
   $('span.col-sm-6', html).each(function() {
        console.log($(this).text());
      });
  
    var Arr=[];
    $('div.field-content table tr td:nth-child(2) ',html).each(function(index,value) {
      
        var link = $(value.attr('href'));
        Arr.push({"link":link});
        
      });
      console.log(Arr);
    
  })
  .catch(function(err) {
      console.log(err)
    
  });

