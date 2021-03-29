CREATE TABLE courses (
   course_id VARCHAR(255) PRIMARY KEY,
   instructor_id VARCHAR(255),
   name VARCHAR(255) NOT NULL,
   description VARCHAR(255) NOT NULL
);
CREATE TABLE videos (
    video_id VARCHAR(255) PRIMARY KEY,
    course_id VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    API_KEY VARCHAR(255) NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE 
);
CREATE TABLE userModel (
    user_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    owned_courses VARCHAR(255),
    password PASSWORD VARCHAR(255),
    type ENUM('User','Instructor','Admin'),
    FOREIGN KEY (owned_courses) REFERENCES courses(course_id) ON DELETE CASCADE 
);
CREATE TABLE comments(
    comment_id VARCHAR(255) PRIMARY KEY,
    video_id VARCHAR(255),
    content VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES userModel(user_id) ON DELETE CASCADE,
    FOREIGN KEY (video_id) REFERENCES videos(video_id) ON DELETE CASCADE
);



