CREATE TABLE userModel (
    user_id VARCHAR(255) PRIMARY_KEY,
    name VARCHAR(255) NOT_NULL,
    username VARCHAR(255) NOT_NULL UNIQUE,
    email VARCHAR(255) NOT_NULL,
    owned_courses VARCHAR(255),
    password PASSWORD VARCHAR(255),
    comments VARCHAR(255),
    FOREIGN KEY (owned_courses) REFERENCES (courses),
    FOREIGN KEY (comments) REFERENCES (comments)
);
CREATE TABLE courses (
   course_id VARCHAR(255) PRIMARY_KEY,
   instructor_id VARCHAR(255)
   name VARCHAR(255) NOT_NULL,
   description VARCHAR(255) NOT_NULL,
   playlist VARCHAR(255),
   FOREIGN KEY (playlist) REFERENCES (videos)
);
CREATE TABLE videos (
    video_id VARCHAR(255) PRIMARY_KEY,
    name VARCHAR(255) NOT_NULL,
    description VARCHAR(255) NOT_NULL,
    API_KEY VARCHAR(255) NOT_NULL,
    comments VARCHAR(255),
    FOREIGN KEY (comments) REFERENCES (comments)
);
CREATE TABLE comments(
    comment_id VARCHAR(255) PRIMARY_KEY,
    content VARCHAR(255) NOT_NULL,
    user_id VARCHAR(255) NOT_NULL,
    FOREIGN KEY (user_id) REFERENCES (userModel)
);