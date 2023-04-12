import time

from selenium import webdriver
from selenium.webdriver.common.by import By

url = "https://www.google.com.br"

#ENTRANDO NO SITE DO GOOGLE
driver = webdriver.Chrome()
driver.get(url)
#CLICANDO EM IMAGEM NO SITE DO GOOGLE
buttonImage = driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/a")
buttonImage.click()

#ENTRANDO NO SITE DO GOOGLE IMAGEM
time.sleep(2)

inputSearch = driver.find_element(By.XPATH, "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")
inputSearch.send_keys("Carros")

buttonSearch = driver.find_element(By.XPATH, "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/button")
buttonSearch.click()


while True:
    pass
#    driver.quit()
