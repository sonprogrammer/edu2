import requests
from bs4 import BeautifulSoup
import pandas as pd
from time import sleep
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib import colors

def get_lotto_numbers(round_num, retries=3):
    """동행복권 사이트에서 특정 회차의 당첨번호 가져오기 (재시도 포함)"""
    url = f"https://www.dhlottery.co.kr/gameResult.do?method=byWin&drwNo={round_num}"
    headers = {"User-Agent": "Mozilla/5.0"}

    for attempt in range(1, retries + 1):
        try:
            res = requests.get(url, headers=headers, timeout=5)
            res.encoding = 'utf-8'
            
            if res.status_code != 200:
                print(f"{round_num}회차 요청 실패 (status code: {res.status_code})")
                continue  # 재시도
            
            soup = BeautifulSoup(res.text, 'html.parser')
            win_nums = soup.select('div.win_result div.num.win span')
            bonus_num = soup.select_one('div.win_result div.num.bonus span')
            date_tag = soup.select_one('p.desc')

            if not win_nums:
                print(f"{round_num}회차 데이터 없음")
                return None

            nums = [n.text.strip() for n in win_nums]
            bonus = bonus_num.text.strip() if bonus_num else ''
            date = date_tag.text.strip().split(' ')[0] if date_tag else ''
            
            return {
                "회차": round_num,
                "추첨일": date,
                "1등 번호": ', '.join(nums),
                "보너스": bonus
            }

        except requests.exceptions.RequestException as e:
            print(f"{round_num}회차 요청 실패, 재시도 {attempt}/{retries}... ({e})")
            sleep(1)  # 재시도 전 대기

    print(f"{round_num}회차 연결 실패 → 건너뜀")
    return None

def save_files(results):
    """CSV 및 PDF 저장"""
    df = pd.DataFrame(results)
    
    # CSV 저장
    csv_filename = "lotto_results.csv"
    df.to_csv(csv_filename, index=False, encoding='utf-8-sig')
    print(f"✅ CSV 저장 완료: {csv_filename}")

    # PDF 저장
    pdf_filename = "lotto_results.pdf"
    pdf = SimpleDocTemplate(pdf_filename, pagesize=A4)
    data_for_pdf = [df.columns.tolist()] + df.values.tolist()
    table = Table(data_for_pdf, repeatRows=1)

    style = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.darkred),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('GRID', (0, 0), (-1, -1), 0.3, colors.grey),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ])
    table.setStyle(style)
    pdf.build([table])
    print(f"✅ PDF 저장 완료: {pdf_filename}")

def main():
    results = []
    round_num = 1

    print("로또 데이터 수집 시작...")

    while True:
        try:
            data = get_lotto_numbers(round_num)
            if data:
                results.append(data)
                print(f"{round_num}회차 완료")
            round_num += 1
            sleep(0.3)  # 서버 부하 방지

            # 안전장치: 임의 큰 숫자 넘어가면 종료
            if round_num > 2000:
                print("최대 회차 도달, 수집 종료")
                break

        except Exception as e:
            print(f"{round_num}회차에서 예기치 않은 오류 발생: {e}")
            print("⚠️ 지금까지 수집한 데이터 저장 중...")
            break

    # 수집 완료 또는 중단 시 파일 저장
    save_files(results)

if __name__ == "__main__":
    main()
