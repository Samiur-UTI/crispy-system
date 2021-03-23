CREATE TABLE userModel (
    `user_id` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL,
    `owned_courses` VARCHAR(255),
    `password` VARCHAR(255),
    `comments` VARCHAR(255),
    `type` ENUM('User','Admin'),
    FOREIGN KEY (`owned_courses`) REFERENCES `courses`(`course_id`),
    FOREIGN KEY (`comments`) REFERENCES `comments`(`comment_id`)
);
CREATE TABLE instructorModel(
    `user_id` VARCHAR(255) PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `courses` VARCHAR(255),
    FOREIGN KEY ('courses') REFERENCES `courses`(`course_id`)
);
CREATE TABLE courses (
   `course_id` VARCHAR(255) PRIMARY KEY,
   `instructor_id` VARCHAR(255),
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `playlist` VARCHAR(255),
   FOREIGN KEY (`instructor_id`) REFERENCES `instructorModel`(`user_id`),
   FOREIGN KEY (`playlist`) REFERENCES `videos`(`video_id`)
);
CREATE TABLE videos (
    `video_id` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `API_KEY` VARCHAR(255) NOT NULL,
    `comments` VARCHAR(255),
    FOREIGN KEY `comments` REFERENCES `comments`(`comment_id`)
);
CREATE TABLE comments(
    `comment_id` VARCHAR(255) PRIMARY KEY,
    `content` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `userModel`(`user_id`)
);