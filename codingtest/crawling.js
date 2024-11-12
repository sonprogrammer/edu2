const puppeteer = require('puppeteer');

(async () => {
    // 브라우저 실행
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 크롤링할 웹사이트로 이동
    await page.goto('https://data.gov/');

    // "war" 관련 데이터를 찾는 텍스트 추출
    const warData = await page.evaluate(() => {
        const results = [];
        // 예시: 전쟁 관련 텍스트가 있는 섹션을 찾는 코드
        const elements = document.querySelectorAll('.dataset-heading');
        elements.forEach(element => {
            if (element.textContent.toLowerCase().includes("Data")) {
                results.push(element.textContent);
            }
        });
        return results;
    });

    console.log('War-related Data:', warData);

    // 브라우저 종료
    await browser.close();
})();
