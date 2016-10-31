# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
artist          | boolean   | not null
banner_url      | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
image_url   | string    | not null
audio_url   | string    | not null
artist_id   | integer   | not null, foreign key (references users), indexed
created_at  | dateTime  | not null
updated_at  | dateTime  | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
created_at  | dateTime  | not null
updated_at  | dateTime  | not null
