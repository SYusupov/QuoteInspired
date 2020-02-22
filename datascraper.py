from bs4 import BeautifulSoup
import requests
import re

site = requests.get('https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#7eb69b766c7a').text
soup = BeautifulSoup(site, 'html.parser')

print(soup.prettify())
big_string = "<QUOTES>\n"
for quote in soup.find_all('p')[2:]:
    without_num = quote.string.lstrip('0123456789.-')
    if re.search(' –(.+)', without_num):
        author = re.search(' –(.+)', without_num).group(0)
        without_num = without_num.strip(author)
        author = author[2:]
        if quote.string !=None:
            new_string = "\t<QUOTE>\n\t\t<AUTHOR>"+author+"</AUTHOR>\n\t\t<TEXT>"+without_num+"</TEXT>\n\t</QUOTE>\n"
            big_string+=new_string
big_string+="</QUOTES>"
