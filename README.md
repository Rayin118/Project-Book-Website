# Build up instructions

## Step 1: Setting Up MySQL Database

1. **Download MySQL**: 
Visit [MySQL Downloads](https://www.mysql.com/downloads/) and download MySQL for your operating system.

2. **Install MySQL Server**: 
After downloading, set up MySQL Server on your local machine.

3. **Download MySQL Workbench**: 
Download MySQL Workbench, a graphical tool for managing MySQL databases.

4. **Execute SQL Script**: 
Open MySQL Workbench, connect to the MySQL server you just set up, and execute the `database.sql` script to create the necessary database.

5. **Configure Environment Variables**:
   - Navigate to the `responsive-book-website/` directory.
   - Create a `.env` file.
   - Add the following contents to the `.env` file:
     ```
     DB_HOST=localhost
     DB_USER=root // Replace with your MySQL username
     DB_PASS=password // Replace with your MySQL password
     DB_NAME=book_club
     ```

## Step 2: Setting Up Node.js Environment

1. **Install NVM (Node Version Manager)**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

2. **download and install Node.js**:
    ```bash
    nvm install 22
    ```

3. **install other packages**
    ```bash
    pip install cors
    npm install body-parser
    npm install path
    npm install mysql2
    npm install express
    ```

## Step 3: Run backend server
1. Go to `./Project-Book-Website-main/responsive-book-website`

2. run
    ```bash
    node server.js
    ```

## Step 4: Open website
Go to `./Project-Book-Website-main/responsive-book-website/assets` and open `index.html`
