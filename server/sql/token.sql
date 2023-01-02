CREATE TABLE Tokens (
    Token VARCHAR(255) NOT NULL,
    TokenType VARCHAR(255) NOT NULL,
    StartDate TIME,
    EndDate TIME,
    PRIMARY KEY (Token)
);

INSERT INTO Tokens
VALUES ("1238", "Bearer", NOW(), ADDTIME(NOW(), "01:00:00"))

SELECT * FROM Tokens

# Per Minute
DELETE FROM Tokens WHERE EndDate < NOW()