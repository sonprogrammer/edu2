from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

#크롬 드라이버 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager


import time
import pyautogui
import pyperclip



#브라우저 꺼짐 방지(브라우저가 켜졌다 금방 꺼지는거)
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

#불필요한 에러 메시지 엇애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# 크롬드라이버메니저를 통해 최신버전을 알아서 가져옴 
service = Service(excutable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 웹 페이지 해딩 주소 이동
driver.implicitly_wait(5) #웹페이지가 로딩 될때까지 5초는 기다림
driver.maximize_window() # 웹페이지 최대화 하는것
driver.get('https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/')

#아이디 입력창
id = driver.find_element(By.CSS_SELECTOR, "#id") #크롬드라이버를 가지고 해당 css선택자를 자동으로 찾아준다
id.click()
# id.send_keys("ods04139") #키보드를 입력하겠다는 말, 그런데 이건 너무 빨리 입력되기 때문에네이버에서 봇인줄알고 사람인지 검사 한다
pyperclip.copy("ods04139") #pyperclip은 프로그램 내 텍스트를 복사하거나 읽을 수 있다
pyautogui.hotkey('command','v') #pyautogui는 자동화 도구로 마우스와 키보드를 제어할 수 있다
time.sleep(2) #2초동안 한다는소리

#비밀번호 입력창
pw = driver.find_element(By.CSS_SELECTOR, "#pw") #크롬드라이버를 가지고 해당 css선택자를 자동으로 찾아준다
pw.click()
# pw.send_keys("Sjs729581@") #키보드를 입력하겠다는 말 
pyperclip.copy("Sjs729581@")
pyautogui.hotkey('command','v')
time.sleep(2)

#로그인 버튼 
login_btn = driver.find_element(By.CSS_SELECTOR, "#log\.login")
login_btn.click()