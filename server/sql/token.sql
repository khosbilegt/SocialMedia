CREATE TABLE Tokens (
    Token VARCHAR(255) NOT NULL,
    TokenType VARCHAR(255) NOT NULL,
    StartDate TIME,
    EndDate TIME,
    Email VARCHAR(255) NOT NULL,
    PRIMARY KEY (Token)
);


DELETE FROM Tokens WHERE Email = "archerdoc13@gmail.com";
INSERT INTO Tokens
VALUES ("1238", "Bearer", NOW(), ADDTIME(NOW(), "01:00:00"), "archerdoc13@gmail.com");

SELECT * FROM Tokens

# Per Minute
DELETE FROM Tokens WHERE EndDate < NOW()

DROP TABLE Tokens