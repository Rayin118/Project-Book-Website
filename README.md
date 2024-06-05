Step 1.
1. 至 https://www.mysql.com/downloads/ 下載 mysql
2. 下載後建立 mysql server 在自己 local 端
3. 下載 mysql workbench
4. 在 workbench 中進入剛剛建立的 mysql server，並執行 database.sql 來建立 database
5. 在 responsive-book-website/ 中新增一個 .env 檔案
6. 在 .env 檔案中新增以下內容:
DB_HOST=localhost
DB_USER=root // Replace with your MySQL username
DB_PASS=password // Replace with your MySQL password
DB_NAME=book_club

Step 2.

Below is the request of environment.

1. # installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

2. # download and install Node.js
nvm install 22

3. pip install cors

4. npm install body-parser

5. npm install path

6. npm install mysql2 

7. npm install express 

Step 3.

1. Go to ./Project-Book-Website-main/responsive-book-website 

2. Run node server.js

Step 4.

Go to ./Project-Book-Website-main/responsive-book-website/assets and Click index.html
