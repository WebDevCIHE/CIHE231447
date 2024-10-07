# CIHE231447

## Demo Link
[Watch the Demo](https://drive.google.com/file/d/1CgDvNRoa8blEXmWehImSG_QYaIVkh1ca/view?usp=sharing)

## Setup Instructions

Follow these steps to set up the Car Sales Website on your local machine:

1. **Prerequisites**: Ensure that Apache and MySQL are running on your system.

2. **Extract Files**:
   - Download the project zip file from releases (or skip step 2 by cloning the repo into a new folder in /htdocs)
   - Extract the contents into the `htdocs` directory of your local server (e.g., XAMPP).

3. **Create Database**:
   - Open your web browser and navigate to `http://localhost/phpmyadmin`.
   - Click on "Databases" and create a new database named `car_sales_db`.

4. **Import SQL File**:
   - Select the `car_sales_db` you just created.
   - Click on the "Import" tab.
   - Choose the provided SQL file from the project folder and click "Go" to create the necessary tables.

5. **Access the Website**:
   - Navigate to `~/html` where the `index.html` file is located in your browser via localhost to view the website

## Note
An additional file, `check_user.php`, was created and implemented in the `handleRegistrationForm()` function to address a duplicate entry error encountered during testing. This file checks if a user attempting to register already exists in the database.

Feel free to reach out if you have any questions or issues!
