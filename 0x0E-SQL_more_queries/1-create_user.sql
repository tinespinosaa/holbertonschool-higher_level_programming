-- creates new user user_0d_1

CREATE USER if not EXISTS 'user_0d_1'@'localhost' 
IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL ON *.* TO 'user_0d_1'@'localhost';
