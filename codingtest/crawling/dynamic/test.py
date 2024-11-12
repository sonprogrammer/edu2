from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

#크롬 드라이버 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager

#브라우저 꺼짐 방지(브라우저가 켜졌다 금방 꺼지는거)
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

#불필요한 에러 메시지 엇애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# 크롬드라이버메니저를 통해 최신버전을 알아서 가져옴 
service = Service(excutable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)
# 웹 페이지 해딩 주소 이동
driver.get('https://www.naver.com')