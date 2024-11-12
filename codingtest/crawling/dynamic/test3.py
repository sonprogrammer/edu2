# import requests 
# from bs4 import BeautifulSoup

# res = requests.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%85%8C%EC%8A%AC%EB%9D%BC')
# html = res.text

# soup = BeautifulSoup(html, 'html.parser') # parser는 html 번역기라 생각하면 됨
# links = soup.select(".news_tit")
# for link in links:
#     title = link.text
#     url = link.attrs['href']
#     print(title, url)


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

# 웹페이지 로드
driver.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%85%8C%EC%8A%AC%EB%9D%BC")

# 페이지가 로드될 때까지 기다리기
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".news_tit"))
)

# 뉴스 항목 추출
articles = driver.find_elements(By.CSS_SELECTOR, ".news_tit")

for article in articles:
    title = article.text
    link = article.get_attribute("href")
    print(title, link)

# 브라우저 종료
driver.quit()
