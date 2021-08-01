const puppeteer = require("puppeteer");
const links = [
  "https://www.jiomart.com/p/groceries/britannia-good-day-cashew-cookies-100-g/491161296",
  "https://www.amazon.in/dp/B07XQTJFTW/ref=cm_sw_em_r_mt_dp_3338J0BZYHXH49BZBHVJ",
  "https://www.bigbasket.com/pd/40001606/britannia-good-day-cashew-cookies-100-g/",
  "https://www.dmart.in/product/britannia-good-day-cashew-cookies",
  "https://grofers.com/prn/britannia-good-day-cashew-600-g-biscuit/prid/266441",
];
var i = 1
async function take_ss(url) {
  try{
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'url/'+i+'.png'});
    i=i+1;
    console.log(url)
    await browser.close();
  }catch (e){
    console.log(e)
  }
}
for (url of links){
  take_ss(url)
}