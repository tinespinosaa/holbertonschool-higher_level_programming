-- creates database hbtn_0d_2 and user user_0d_2 with SELECT privilege

CREATE database if not EXISTS hbtn_0d_2;
CREATE USER if not EXISTS 'user_0d_2'@'localhost'
IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON hbtn_0d_2.* TO 'user_0d_2'@'localhost';
