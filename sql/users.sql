CREATE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    `Role` VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID)
);

# Get
SELECT * FROM Users

# Create User
INSERT INTO Users(FirstName, LastName, `Password`, Email, `Role`)
VALUES ("Hello", "World2", "Test234", "archerdoc13@gmail.com", "User");

# Modify User
UPDATE Users
SET FirstName = "Goodbye"
WHERE UserID = "1234"

# Check if ID exists
SELECT PASSWORD FROM Users
WHERE Email = "archerdoc13@gmail.com"