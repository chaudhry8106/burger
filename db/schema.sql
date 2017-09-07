USE t8fby8p9vs3f1xqd;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    dateandtime TIMESTAMP,
    PRIMARY KEY(id)
);